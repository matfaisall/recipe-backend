const { getAllDataUsers } = require("../controller/UsersController");
const express = require("express");
const router = express.Router();

router.get("/", getAllDataUsers);

module.exports = router;
