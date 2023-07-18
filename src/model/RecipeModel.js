const Pool = require("../config/db");

const getRecipe = async () => {
  return new Promise((resolve, reject) =>
    Pool.query(`SELECT * FROM recipe`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error);
      }
    })
  );
};

module.exports = {
  getRecipe,
};
