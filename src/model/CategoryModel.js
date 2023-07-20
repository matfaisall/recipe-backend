const Pool = require("../config/db");

const getAllCategories = async () => {
  return new Promise((resolve, reject) => {
    Pool.query(`SELECT * FROM category`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error.message);
      }
    });
  });
};

module.exports = { getAllCategories };
