const Pool = require("../config/db");

// MODEL : showing all recipe data

const getRecipe = async () => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.title, recipe.ingredients, recipe.image, recipe.created_at, category.name AS category, users.name AS author FROM recipe JOIN category ON recipe.category_id = category.id JOIN users ON recipe.users_id = users.id ORDER BY id DESC`,
      (error, result) => {
        if (!error) {
          console.log("ini result model", result);
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

// Model : for showing recipe data by ID

const getRecipeById = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`SELECT * FROM recipe WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error.message);
      }
    });
  });
};

// Model : for adding recipe data
const postRecipe = async (data) => {
  const { title, ingredients, category_id, users_id, image } = data;

  // console.log("ini data model", data);
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO recipe (image, title, ingredients, category_id, users_id) VALUES ('${image}', '${title}', '${ingredients}', ${category_id}, ${users_id})`,
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

// Model : for update recipe data by ID
const putRecipe = async (data, id) => {
  const { title, ingredients, category_id, image } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE recipe SET title='${title}', ingredients='${ingredients}', category_id=${category_id}, image='${image}' WHERE id=${id}`,
      (error, result) => {
        if (!error) {
          console.log("ini result model", result);
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

// Model : for delete recipe data

const deleteRecipeById = async (id) => {
  return new Promise((resolve, reject) => {
    Pool.query(`DELETE FROM recipe WHERE id=${id}`, (error, result) => {
      if (!error) {
        resolve(result);
      } else {
        reject(error.message);
      }
    });
  });
};

const getDataSearch = async (data) => {
  const { search, searchBy, offset, limit, sortBy } = data;
  // console.log("model search");
  // console.log(search, searchBy, offset, limit, sortBy);

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.title, recipe.ingredients, recipe.image, recipe.like_count,recipe.saved_count,recipe.comment_count, category.name AS category, users.name AS author, users.photo FROM recipe JOIN category ON recipe.category_id = category.id JOIN users ON recipe.users_id = users.id WHERE ${searchBy} ILIKE '%${search}%' ORDER BY recipe.id ${sortBy} OFFSET ${offset} LIMIT ${limit}`,
      (error, result) => {
        if (!error) {
          // console.log("ini adalah result model", result);
          resolve(result);
        } else {
          reject(error.message);
        }
      }
    );
  });
};

const getDataRecipeCount = async (data) => {
  const { search, searchBy } = data;
  // console.log(search, searchBy, offset, limit);

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT COUNT(*) FROM recipe JOIN category ON recipe.category_id = category.id WHERE ${searchBy} ILIKE '%${search}%'`,
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

const getDataFilter = async (data) => {
  const { sort, offset, limit, sortBy, id } = data;
  console.log("id model", data);

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.title, recipe.ingredients, recipe.image, category.name AS category, users.name AS author FROM recipe JOIN category ON recipe.category_id = category.id JOIN users ON recipe.users_id = users.id WHERE users_id=${id} ORDER BY ${sortBy} ${sort} OFFSET ${offset} LIMIT ${limit}`,
      (error, result) => {
        if (!error) {
          // console.log("ini adalah result model", result);
          resolve(result);
        } else {
          reject("terjadi kesalhan", error);
        }
      }
    );
  });
};

module.exports = {
  getRecipe,
  getRecipeById,
  postRecipe,
  putRecipe,
  deleteRecipeById,
  getDataSearch,
  getDataRecipeCount,
  getDataFilter,
};
