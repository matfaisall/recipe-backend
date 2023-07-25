const argon2 = require("argon2");
const { getUserByEmail, createUser } = require("../model/AuthModel");

const AuthController = {
  login: async (req, res, next) => {
    let { email, password } = req.body;
    // console.log(email, password);

    if (!email || !password) {
      return res.status(404).json({
        status: 404,
        message: "email dan password harus diisi",
      });
    }

    let data = await getUserByEmail(email);

    if (!data.rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "email anda belum terdaftar",
      });
    }

    let users = data.rows[0];
    let verify = await argon2.verify(users.password, password);
    // console.log("verify password: ", verify);

    if (!verify) {
      return res.status(404).json({
        status: 404,
        message: "password yang anda inputkan salah",
      });
    }

    // console.log("data auth controller", data);

    delete users.password;

    if (data) {
      return res.status(200).json({
        status: 200,
        message: "get data user successfully",
        data: users,
      });
    }
  },

  register: async (req, res, next) => {
    let { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(404).json({
        status: 404,
        message: "email dan password harus diisi dengan benar",
      });
    }

    let user = await getUserByEmail(email);

    if (user.rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "email sudah terdaftar silahkan login",
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
        message: "registrasi gagal",
      });
    }

    return res.status(200).json({
      status: 200,
      message: "registrasi berhasil",
    });
  },
};

module.exports = AuthController;
