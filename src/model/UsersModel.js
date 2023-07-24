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

const getUserById = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`SELECT * FROM users WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error.message);
      }
    });
  });
};

const postUser = async (data) => {
  let { name, email, password } = data;
  console.log("data model: ", data);
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO users (name, email, password) VALUES ('${name}', '${email}', '${password}')`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error.message);
        }
      }
    );
  });
};

const putUser = async (data, id) => {
  const { name, email, password } = data;

  // console.log("model put recipe");

  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE users SET name='${name}', email='${email}', password='${password}' WHERE id=${id}`,
      (error, result) => {
        if (!error) {
          // console.log("result model", result);
          resolve(result);
        } else {
          reject(error.message);
        }
      }
    );
  });
};

// const putUser =
//   "UPDATE users SET name = $1, email=$2, password=$3 WHERE id = $4";

const deleteUserById = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM users WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error.message);
      }
    });
  });
};

module.exports = {
  getAllUsers,
  getUserById,
  postUser,
  putUser,
  deleteUserById,
};
