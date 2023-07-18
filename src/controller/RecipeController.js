const { getRecipe } = require("../model/RecipeModel");

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
};

module.exports = RecipeController;
