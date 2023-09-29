const argon2 = require("argon2");
const { getUserByEmail, createUser } = require("../model/AuthModel");
const GenerateToken = require("../../helpers/GenerateToken");

const AuthController = {
  login: async (req, res, next) => {
    const { email, password } = req.body;
    // console.log(email, password);

    if (!email || !password) {
      return res.status(404).json({
        status: 404,
        message: "email and password required!",
      });
    }

    let data = await getUserByEmail(email);

    if (!data.rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "Your email is not registered, Please register",
      });
    }

    let users = data.rows[0];
    let verify = await argon2.verify(users.password, password);
    // console.log("verify password: ", verify);

    if (!verify) {
      return res.status(404).json({
        status: 404,
        message: "Your password is incorrect",
      });
    }

    // console.log("data auth controller", data);

    delete users.password;

    let token = GenerateToken(users);
    // console.log("ini token JWT : ", token);

    users.token = token;

    if (data) {
      return res.status(201).json({
        status: 201,
        message: "Login Successfully",
        data: users,
      });
    }
  },

  // === REGISTER === //
  register: async (req, res, next) => {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        status: 404,
        message: "email and password required!",
      });
    }

    let user = await getUserByEmail(email);

    if (user.rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "Your email is already registered, please login.",
      });
    }

    password = await argon2.hash(password);

    let dataUser = {
      name,
      email,
      password,
    };

    console.log(dataUser);

    let data = await createUser(dataUser);

    if (!data.rowCount == 1) {
      return res.status(404).json({
        status: 404,
        message: "Failed registration.",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "Registration successful",
    });
  },
};

module.exports = AuthController;
