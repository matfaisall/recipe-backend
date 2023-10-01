const app = require("express");
const router = app.Router();

const Recipe = require("./Recipe");
const Users = require("./Users");
const Category = require("./Category");
const Auth = require("./Auth");
const Comment = require("./Comment");

router.use("/recipe", Recipe);
router.use("/users", Users);
router.use("/category", Category);
router.use("/auth", Auth);
router.use("/comment", Comment);

module.exports = router;
