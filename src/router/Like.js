const { postLike, getLikesRecipe } = require("../controller/LikeController");

const express = require("express");
const router = express.Router();

const { AuthChecker } = require("../middleware/authChecker");

router.post("/:recipe_id", AuthChecker, postLike);
router.get("/", AuthChecker, getLikesRecipe);

module.exports = router;
