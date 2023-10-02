const {
  getData,
  getDataById,
  postDataRecipe,
  putDataRecipe,
  deleteDataRecipeById,
  getSearch,
  getFilter,
} = require("../controller/RecipeController");

const upload = require("../utils/UploadPhoto");

const express = require("express");
const router = express.Router();

// const { Middleware } = require("../middleware/middleware");

const { AuthChecker } = require("../middleware/authChecker");

router.get("/filterdata", AuthChecker, getFilter);
router.get("/searchdata", AuthChecker, getSearch);

router.get("/", AuthChecker, getData);
router.get("/:id", AuthChecker, getDataById);
router.post("/", AuthChecker, upload.single("image"), postDataRecipe);
router.put("/:id", AuthChecker, upload.single("image"), putDataRecipe);
router.delete("/:id", AuthChecker, deleteDataRecipeById);

module.exports = router;
