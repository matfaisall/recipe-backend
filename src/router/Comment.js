const {
  postComment,
  getComments,
  // deleteComment,
} = require("../controller/CommentController");

const express = require("express");
const router = express.Router();

const { AuthChecker } = require("../middleware/authChecker");

router.get("/:id", AuthChecker, getComments);
router.post("/:id", AuthChecker, postComment);
// router.delete("/:id", AuthChecker, deleteComment);

module.exports = router;
