const app = require("express");
const router = app.Router();

const Recipe = require("./Recipe");
const Users = require("./Users");

router.use("/recipe", Recipe);

router.use("/users", Users);

module.exports = router;
