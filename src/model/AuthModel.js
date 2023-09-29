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
  let { name, email, password } = data;

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

module.exports = { getUserByEmail, createUser };
