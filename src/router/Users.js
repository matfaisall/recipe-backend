const {
  getAllDataUsers,
  getDataById,
  putDataUserById,
  // pushDataUser,
  // deleteDataUserById,
} = require("../controller/UsersController");
const express = require("express");
const router = express.Router();

router.get("/", getAllDataUsers);
router.get("/:id", getDataById);
router.put("/:id", putDataUserById);
// router.post("/", pushDataUser);
// router.delete("/:id", deleteDataUserById);

module.exports = router;
