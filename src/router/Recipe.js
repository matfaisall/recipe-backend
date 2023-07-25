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

const { Middleware } = require("../middleware/middleware");

router.get("/filterdata", getFilter);
router.get("/searchdata", getSearch);
router.get("/", Middleware, getData);
router.get("/:id", getDataById);
router.post("/", Middleware, postDataRecipe);
router.put("/:id", Middleware, putDataRecipe);
router.delete("/:id", Middleware, deleteDataRecipeById);

module.exports = router;
