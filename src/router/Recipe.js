const {
  getData,
  getDataById,
  postDataRecipe,
  putDataRecipe,
  deleteDataRecipeById,
  getSearch,
  getFilter,
} = require("../controller/RecipeController");

const express = require("express");
const router = express.Router();

router.get("/filterdata", getFilter);
router.get("/searchdata", getSearch);
router.get("/", getData);
router.get("/:id", getDataById);
router.post("/", postDataRecipe);
router.put("/:id", putDataRecipe);
router.delete("/:id", deleteDataRecipeById);

module.exports = router;
