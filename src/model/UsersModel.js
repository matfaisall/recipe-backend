const Pool = require("../config/db");

const getAllUsers = async () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM users`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = { getAllUsers };
