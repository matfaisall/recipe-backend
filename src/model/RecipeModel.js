const Pool = require("../config/db");

// MODEL : showing all recipe data

const getRecipe = async () => {
  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.image, recipe.title, recipe.ingredients, category.name AS category, users.name AS author FROM recipe JOIN category ON recipe.category_id = category_id JOIN users ON recipe.users_id = users.id`,
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
  const { title, ingredients, category_id, users_id } = data;

  console.log("ini data model", data);
  return new Promise((resolve, reject) => {
    Pool.query(
      `INSERT INTO recipe (image, title, ingredients, category_id, users_id) VALUES ('https://placehold.co/600x400', '${title}', '${ingredients}', ${category_id}, ${users_id})`,
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

// functon for chacking email exists of not

// Model : for update recipe data by ID

const putRecipe = async (data, id) => {
  const { title, ingredients, category_id } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `UPDATE recipe SET title='${title}', ingredients='${ingredients}', category_id=${category_id} WHERE id=${id}`,
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
  const { search, searchBy, sort, offset, limit } = data;
  // console.log("sort data:", typeof sort);

  // console.log("search search by - model", search, searchBy);

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.title, recipe.ingredients, recipe.image, category.name AS category FROM recipe JOIN category ON recipe.category_id = category.id WHERE ${searchBy} ILIKE '%${search}%' OFFSET ${offset} LIMIT ${limit}`,
      (error, result) => {
        if (!error) {
          // console.log("ini adalah result model", result);
          resolve(result);
        } else {
          reject(error);
        }
      }
    );
  });
};

const getDataFilter = async (data) => {
  const { sort, offset, limit, sortBy } = data;

  return new Promise((resolve, reject) => {
    Pool.query(
      `SELECT recipe.id, recipe.title, recipe.ingredients, recipe.image, category.name AS category FROM recipe JOIN category ON recipe.category_id = category.id ORDER BY ${sortBy} ${sort} OFFSET ${offset} LIMIT ${limit}`,
      (error, result) => {
        if (!error) {
          // console.log("ini adalah result model", result);
          resolve(result);
        } else {
          reject(error);
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
  getDataFilter,
};
