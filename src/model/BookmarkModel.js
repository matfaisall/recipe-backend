const Pool = require("../config/db");

const getDataBookmarkedRecipe = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT
    bookmark.recipe_id,
    recipe.category_id,
    recipe.title,
    recipe.ingredients,
    recipe.like_count,
    recipe.saved_count,
    recipe.comment_count,
    recipe.image,
    category.name AS category,
    users.name AS author
FROM bookmark
    JOIN recipe ON bookmark.recipe_id = recipe.id
    JOIN category ON recipe.category_id = category.id
    JOIN users ON recipe.users_id = users.id
WHERE bookmark.users_id = ${id}`,
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

const unBookmarkData = async (data) => {
  const { recipe_id, users_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `DELETE FROM bookmark WHERE users_id=${users_id} AND recipe_id=${recipe_id}`,
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

const updateBookmarkRecipe = async (count, recipe_id) => {
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

const bookmarkRecipeDataCount = (data) => {
  const { recipe_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT COUNT(*) FROM bookmark WHERE recipe_id=${parseInt(recipe_id)}`,
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

const bookmarkRecipeData = (data) => {
  const { recipe_id, users_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO bookmark(recipe_id, users_id) VALUES(${recipe_id}, ${users_id})`,
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
  getDataBookmarkedRecipe,
  unBookmarkData,
  bookmarkRecipeDataCount,
  updateBookmarkRecipe,
  bookmarkRecipeData,
};
