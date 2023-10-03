const Pool = require("../config/db");

const postDataLike = async () => {
  console.log("this is post data like");
};

const getDataLike = async () => {};

const getDataLikeRecipe = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT
    liked.recipe_id,
    recipe.category_id,
    recipe.title,
    recipe.ingredients,
    recipe.like_count,
    recipe.saved_count,
    recipe.comment_count,
    recipe.image,
    category.name AS category,
    users.name AS author
FROM liked
    JOIN recipe ON liked.recipe_id = recipe.id
    JOIN category ON recipe.category_id = category.id
    JOIN users ON recipe.users_id = users.id
WHERE liked.users_id = ${id};`,
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

const unLikeData = async (data) => {
  const { users_id, recipe_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `DELETE FROM liked WHERE users_id=${users_id} AND recipe_id=${recipe_id}`,
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

const likeRecipeDataCount = async (data) => {
  const { recipe_id } = data;
  return new Promise((resolve, reject) => [
    Pool.query(
      `SELECT COUNT(*) FROM liked WHERE recipe_id=${parseInt(recipe_id)}`,
      (error, result) => {
        if (!error) {
          resolve(result);
        } else {
          reject(error);
        }
      }
    ),
  ]);
};

const updateLikeRecipe = async (count, recipe_id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE recipe SET like_count=${count} WHERE id=${recipe_id}`,
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

const likeRecipeData = async (data) => {
  const { users_id, recipe_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO liked(recipe_id, users_id) VALUES(${recipe_id}, ${users_id}) RETURNING *`,
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

const getLikedRecipe = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT
    liked.recipe_id,
    recipe.category_id,
    recipe.title,
    recipe.ingredients,
    recipe.like_count,
    recipe.saved_count,
    recipe.comment_count,
    recipe.image,
    category.name AS category,
    users.name AS author
FROM liked
    JOIN recipe ON liked.recipe_id = recipe.id
    JOIN category ON recipe.category_id = category.id
    JOIN users ON recipe.users_id = users.id
WHERE liked.users_id = ${id}`,
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
  postDataLike,
  getDataLike,
  getDataLikeRecipe,
  unLikeData,
  likeRecipeDataCount,
  updateLikeRecipe,
  likeRecipeData,
  getLikedRecipe,
};
