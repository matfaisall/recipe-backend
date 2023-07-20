const {
  getAllDataUsers,
  getDataById,
  pushDataUser,
  putDataUserById,
  deleteDataUserById,
} = require("../controller/UsersController");
const express = require("express");
const router = express.Router();

router.get("/", getAllDataUsers);
router.get("/:id", getDataById);
router.post("/", pushDataUser);
router.put("/:id", putDataUserById);
router.delete("/:id", deleteDataUserById);

module.exports = router;
