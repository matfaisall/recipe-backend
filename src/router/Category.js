const { getAllDataCategories } = require("../controller/CategoryController");

const express = require("express");
const router = express.Router();

router.get("/", getAllDataCategories);

module.exports = router;
