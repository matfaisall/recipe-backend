const {
  getRecipe,
  getRecipeById,
  postRecipe,
  putRecipe,
  deleteRecipeById,
  getDataSearch,
  getDataRecipeCount,
  getDataFilter,
} = require("../model/RecipeModel");
const xss = require("xss");

const cloudinary = require("../config/photo");

const RecipeController = {
  // Get All Data Recipe
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

  // Get Recipe By Id
  getDataById: async (req, res, next) => {
    const { id } = req.params;
    // console.log(id);
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

  // Upload Recipe
  postDataRecipe: async (req, res, next) => {
    const { title, ingredients, category_id } = req.body;

    const result = await cloudinary.uploader.upload(req.file.path, {
      folder: "recipe",
    });
    console.log("ini cloudinary post", result);

    // const image = req.file;
    let users_id = req.payload.id;

    // CREATE VALIDATION ON HERE !!!
    if (!title || !ingredients || !category_id || !users_id) {
      return res.status(404).json({
        status: 404,
        message: "You have to enter the data, Please enter your data correctly",
      });
    }

    let data = {
      image: result.secure_url,
      title: xss(title),
      ingredients: xss(ingredients),
      category_id: parseInt(category_id),
      users_id,
    };

    postRecipe(data);

    return res.status(201).json({
      status: 201,
      message: "Data recipe created successfuly!",
      data,
    });
  },

  // Update Recipe
  putDataRecipe: async (req, res, next) => {
    const { id } = req.params;
    const { title, ingredients, category_id } = req.body;

    if (!id || id <= 0 || isNaN(id)) {
      return res
        .status(404)
        .json({ message: "your ID uncorrect! or Your ID not found!!" });
    }

    let dataRecipeId = await getRecipeById(parseInt(id));
    let users_id = req.payload.id;

    console.log(req.file);

    // check photo
    if (!req.file) {
      if (users_id != dataRecipeId.rows[0].users_id) {
        return res.status(404).json({ message: "This content is not yours!" });
      }

      let data = {
        title: xss(title) || dataRecipeId.rows[0].title,
        ingredients: xss(ingredients) || dataRecipeId.rows[0].ingredients,
        category_id: parseInt(category_id) || dataRecipeId.rows[0].category_id,
        image: dataRecipeId.rows[0].image,
      };

      putRecipe(data, id);
      delete data.id;

      return res
        .status(200)
        .json({ message: "Update data recipe success", data });
    } else {
      const result = await cloudinary.uploader.upload(req.file.path, {
        folder: "recipe",
      });

      if (!result) {
        return res.status(400).json({ message: "Upload image invalid" });
      }

      if (users_id != dataRecipeId.rows[0].users_id) {
        return res.status(404).json({ message: "This recipe is not yours!" });
      }

      console.log("id data");
      console.log(users_id);
      console.log(dataRecipeId.rows[0]);

      let data = {
        title: title || dataRecipeId.rows[0].title,
        ingredients: ingredients || dataRecipeId.rows[0].ingredients,
        category_id: parseInt(category_id) || dataRecipeId.rows[0].category_id,
        image: result.secure_url,
      };

      putRecipe(data, id);
      delete data.id;
      return res
        .status(200)
        .json({ message: "Upldate data recipe sucess", data });
    }

    // console.log(result);
  },

  // Delete Recipe
  deleteDataRecipeById: async (req, res, next) => {
    const { id } = req.params;

    // Write the Validateion
    if (!id || id <= 0 || isNaN(id)) {
      return res
        .status(404)
        .json({ message: "your ID uncorrect! or Your ID not found!!" });
    }

    let users_id = req.payload.id;
    let dataRecipeId = await getRecipeById(parseInt(id));
    console.log(dataRecipeId);

    if (users_id != dataRecipeId.rows[0].users_id) {
      return res.status(404).status({
        status: 404,
        message: "This content is not yours!",
      });
    }
    await cloudinary.uploader.destroy(dataRecipeId.rows[0].image);
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
    const { search, searchBy, limit, sortBy } = req.query;

    let page = req.query.page || 1;
    let limiter = limit || 5;

    data = {
      search: search || "",
      searchBy: searchBy || "title",
      offset: (page - 1) * limiter,
      limit: limit || 5,
      sortBy: sortBy || "ASC",
    };

    let dataSearch = await getDataSearch(data);
    let dataRecipeCount = await getDataRecipeCount(data);

    let pagination = {
      totalPage: Math.ceil(dataRecipeCount.rows[0].count / limiter),
      totalData: parseInt(dataRecipeCount.rows[0].count),
      pageNow: parseInt(page),
    };

    if (dataSearch) {
      res.status(200).json({
        status: 200,
        message: "Search Data recipe successfully!",
        data: dataSearch.rows,
        pagination,
      });
    }
    // console.log(dataSearch);
  },

  getFilter: async (req, res, next) => {
    try {
      const { sort, page, limit, sortBy } = req.query;
      const { id } = req.payload;
      console.log(sort);
      let pagination = page || 1;
      let limiter = limit || 5;

      let data = {
        offset: (pagination - 1) * limiter,
        limit: limit || 5,
        sort: sort || "ASC",
        sortBy: sortBy || "title",
        id: id,
      };

      console.log(data);

      let dataFilter = await getDataFilter(data);
      if (dataFilter) {
        res.status(200).json({
          status: 200,
          message: "Filter data recipe successfully!",
          data: dataFilter.rows,
        });
      }
    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = RecipeController;
