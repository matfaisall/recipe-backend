const {
  postBookmark,
  getBookmarkRecipe,
} = require("../controller/BookmarkController");

const express = require("express");
const router = express.Router();

const { AuthChecker } = require("../middleware/authChecker");

router.post("/:recipe_id", AuthChecker, postBookmark);
router.get("/", AuthChecker, getBookmarkRecipe);

module.exports = router;
