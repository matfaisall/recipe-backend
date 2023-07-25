const app = require("express");
const router = app.Router();

const Recipe = require("./Recipe");
const Users = require("./Users");
const Category = require("./Category");
const Auth = require("./Auth");

router.use("/recipe", Recipe);
router.use("/users", Users);
router.use("/category", Category);
router.use("/auth", Auth);

module.exports = router;
