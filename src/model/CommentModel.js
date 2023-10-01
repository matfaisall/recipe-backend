const Pool = require("../config/db");

const getDataComment = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM comments WHERE recipe_id = ${id}`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
          console.log(error.message);
        }
      }
    );
  });
};

const postDataCommmet = async (data) => {
  const { text, recipe_id, users_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO comments (text, recipe_id, users_id) VALUES ('${text}', ${recipe_id}, ${users_id})`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });

  // console.log("ini data comment model", data);
};

module.exports = {
  getDataComment,
  postDataCommmet,
};
