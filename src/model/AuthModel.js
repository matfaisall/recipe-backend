const Pool = require("../config/db");

// Chack Email | is email registered
const getUserByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT * FROM users WHERE email='${email}'`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

// Create user
const createUser = async (data) => {
  let { name, email, password, photo } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO users (name, email, password, photo) VALUES ('${name}', '${email}', '${password}', '${photo}')`,
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

module.exports = { getUserByEmail, createUser };
