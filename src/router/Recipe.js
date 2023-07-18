const { getData } = require("../controller/RecipeController");
const express = require("express");
const router = express.Router();

router.get("/", getData);

module.exports = router;
