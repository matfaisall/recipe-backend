const { getAllUsers } = require("../model/UsersModel");

const UsersController = {
  getAllDataUsers: async (req, res, next) => {
    let allDataUsers = await getAllUsers();
    if (allDataUsers) {
      res.status(200).json({
        status: 200,
        message: "get all users successfully",
        data: allDataUsers,
      });
    }
  },
};

module.exports = UsersController;
