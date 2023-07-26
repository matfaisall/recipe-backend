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
// const multer = require("multer");
// const path = require("path");

// const storage = multer.diskStorage({
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname));
//   },
// });

// const upload = multer({ storage });

router.get("/filterdata", getFilter);
router.get("/searchdata", getSearch);
router.get("/", Middleware, getData);
router.get("/:id", getDataById);
router.post("/", Middleware, postDataRecipe);
router.put("/:id", Middleware, putDataRecipe);
router.delete("/:id", Middleware, deleteDataRecipeById);

module.exports = router;
