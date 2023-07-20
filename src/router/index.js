const app = require("express");
const router = app.Router();

const Recipe = require("./Recipe");
const Users = require("./Users");
const Category = require("./Category");

router.use("/recipe", Recipe);

router.use("/users", Users);

router.use("/category", Category);

module.exports = router;
