const { getAllCategories } = require("../model/CategoryModel");

const CategoryController = {
  getAllDataCategories: async (req, res, next) => {
    let allDataCategories = await getAllCategories();
    if (allDataCategories) {
      res.status(200).json({
        status: 200,
        message: "Get all categories successfully",
        data: allDataCategories.rows,
      });
    }
  },
};

module.exports = CategoryController;
