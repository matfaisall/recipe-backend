const argon2 = require("argon2");

const {
  getAllUsers,
  getUserById,
  putUser,
  // postUser,
  // deleteUserById,
} = require("../model/UsersModel");

// console.log("ini controller put user");
// console.log(putUser);

const UsersController = {
  getAllDataUsers: async (req, res, next) => {
    let allDataUsers = await getAllUsers();
    // console.log(allDataUsers);
    if (allDataUsers) {
      res.status(200).json({
        status: 200,
        message: "get all users successfully",
        data: allDataUsers.rows,
      });
    }
  },

  getDataById: async (req, res, next) => {
    const { id } = req.params;

    let dataUserById = await getUserById(parseInt(id));
    console.log("ini user controller ", dataUserById);
    if (!dataUserById.rows) {
      return res.status(404).json({
        status: 404,
        message: "Get Data user not found",
        data: [],
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Get data user successfully",
      data: dataUserById.rows[0],
    });
  },
  // pushDataUser: async (req, res, next) => {
  //   const { name, email, password } = req.body;

  //   let data = {
  //     name: name,
  //     email: email,
  //     password: password,
  //   };

  //   postUser(data);

  //   return res.status(200).json({
  //     status: 200,
  //     message: "Post data user successfully",
  //     data,
  //   });
  // },

  putDataUserById: async (req, res, next) => {
    const { id } = req.params;
    let { name, email, password } = req.body;

    let dataUserById = await getUserById(parseInt(id));

    console.log("ini controller update user: ", dataUserById);

    password = await argon2.hash(password);

    let data = {
      name: name || dataUserById.rows[0].name,
      email: email || dataUserById.rows[0].email,
      password: password || dataUserById.rows[0].password,
    };

    putUser(data, id);

    delete data.id;

    return res.status(200).json({
      status: 200,
      message: "Updata data user successfully",
      data,
    });
  },

  // deleteDataUserById: async (req, res, next) => {
  //   console.log(res);
  //   const { id } = req.params;
  //   // console.log(name, email);

  //   let deleteData = await deleteUserById(parseInt(id));

  //   if (!deleteData) {
  //     return res.status(404).json({
  //       status: 404,
  //       message: "Delete data failed, Data not found",
  //     });
  //   }
  //   return res.status(200).json({
  //     status: 200,
  //     message: "Delete data user successfully",
  //     data: deleteData.rows[0],
  //   });
  // },
};

module.exports = UsersController;
