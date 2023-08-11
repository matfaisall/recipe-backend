const {
  getData,
  getDataById,
  postDataRecipe,
  putDataRecipe,
  deleteDataRecipeById,
  getSearch,
  // getFilter,
} = require("../controller/RecipeController");

const upload = require("../middleware/UploadPhoto");

const express = require("express");
const router = express.Router();

const { Middleware } = require("../middleware/middleware");

// router.get("/filterdata", Middleware, getFilter);
router.get("/searchdata", Middleware, getSearch);

router.get("/", Middleware, getData);
router.get("/:id", getDataById);
router.post("/", Middleware, upload.single("image"), postDataRecipe);
router.put("/:id", Middleware, upload.single("image"), putDataRecipe);
router.delete("/:id", Middleware, deleteDataRecipeById);

module.exports = router;
