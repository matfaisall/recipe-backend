const {
  getRecipe,
  getRecipeById,
  postRecipe,
  putRecipe,
  deleteRecipeById,
  getDataSearch,
  getDataFilter,
} = require("../model/RecipeModel");

const RecipeController = {
  getData: async (req, res, next) => {
    let dataRecipe = await getRecipe();
    if (dataRecipe) {
      res.status(200).json({
        status: 200,
        message: "get data recipe succesfully",
        data: dataRecipe.rows,
      });
    }
  },
  getDataById: async (req, res, next) => {
    const { id } = req.params;
    console.log(id);
    let dataRecipeById = await getRecipeById(parseInt(id));

    // CREATE VALIDATION
    if (!id || isNaN(id) || id <= 0) {
      return res.status(404).json({
        status: 404,
        message: "Your ID not found!",
      });
    }

    if (!dataRecipeById.rows[0]) {
      return res.status(404).json({
        status: 404,
        message: "Data recipe not found",
        data: [],
      });
    }

    return res.status(200).json({
      status: 200,
      message: "get data recipe successfully",
      data: dataRecipeById.rows[0],
    });
  },

  postDataRecipe: async (req, res, next) => {
    const { title, ingredients, category_id, user_id } = req.body;

    // CREATE VALIDATION ON HERE !!!
    if (!title || !ingredients || !category_id) {
      return res.status(404).json({
        status: 404,
        message: "You have to enter the data, Please enter your data correctly",
      });
    }

    let data = {
      title: title,
      ingredients: ingredients,
      category_id: category_id,
      user_id: user_id,
    };

    postRecipe(data);

    return res.status(200).json({
      status: 200,
      message: "Data recipe created successfuly!",
      data,
    });
  },

  putDataRecipe: async (req, res, next) => {
    const { id } = req.params;
    const { title, ingredients, category_id } = req.body;

    if (!id || id <= 0 || isNaN(id)) {
      return res
        .status(404)
        .json({ message: "your ID uncorrect! or Your ID not found!!" });
    }

    let dataRecipeId = await getRecipeById(parseInt(id));

    let data = {
      title: title || dataRecipeId.rows[0].title,
      ingredients: ingredients || dataRecipeId.rows[0].ingredients,
      category_id: parseInt(category_id) || dataRecipeId.rows[0].category_id,
    };

    let result = putRecipe(data, id);
    // console.log(result);

    delete data.id;

    return res
      .status(200)
      .json({ status: 200, message: "update data recipe success", data });
  },

  deleteDataRecipeById: async (req, res, next) => {
    const { id } = req.params;

    // Write the Validateion
    if (!id || id <= 0 || isNaN(id)) {
      return res
        .status(404)
        .json({ message: "your ID uncorrect! or Your ID not found!!" });
    }

    let deleteData = await deleteRecipeById(parseInt(id));

    if (!deleteData) {
      return res.status(404).json({
        status: 404,
        message: "Delete data failed, Data not found",
      });
    }
    return res.status(200).json({
      status: 200,
      message: "Delete data recipe successfully",
      data: deleteData.rows[0],
    });
  },

  getSearch: async (req, res, next) => {
    const { search, searchBy, sort, page, limit } = req.query;

    let pagination = page || 1;
    let limiter = limit || 5;

    data = {
      search: search || "",
      searchBy: searchBy || "title",
      offset: (pagination - 1) * limiter,
      limit: limit || 5,
      sort: sort,
    };

    let dataSearch = await getDataSearch(data);

    if (dataSearch) {
      res.status(200).json({
        status: 200,
        message: "Search Data recipe successfully!",
        data: dataSearch.rows,
      });
    }
    // console.log(dataSearch);
  },

  getFilter: async (req, res, next) => {
    const { sort, page, limit, sortBy } = req.query;
    let pagination = page || 1;
    let limiter = limit || 5;

    let data = {
      offset: (pagination - 1) * limiter,
      limit: limit || 5,
      sort: sort,
      sortBy: sortBy,
    };

    let dataFilter = await getDataFilter(data);
    if (dataFilter) {
      res.status(200).json({
        status: 200,
        message: "Filter data recipe successfully!",
        data: dataFilter.rows,
      });
    }
  },
};

module.exports = RecipeController;
