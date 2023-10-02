const Pool = require("../config/db");

const getDataComment = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT
      comments.text,
      users.name,
      users.photo
  FROM comments
      JOIN users ON comments.users_id = users.id
  WHERE comments.recipe_id = ${id}`,
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

const getCommentCount = async (data) => {
  const { recipe_id } = data;
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT COUNT(*) FROM comments WHERE recipe_id = ${recipe_id}`,
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

const updateCommentRecipe = async (count, recipe_id) => {
  console.log("ini update commnet model", count, recipe_id);
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE recipe SET comment_count=${count} WHERE id=${recipe_id}`,
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

module.exports = {
  getDataComment,
  postDataCommmet,
  getCommentCount,
  updateCommentRecipe,
};
