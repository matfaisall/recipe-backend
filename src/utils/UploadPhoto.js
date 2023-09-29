const multer = require("multer");

const storage = multer.diskStorage({
  // destination: function (req, file, cb) {
  //   cb(null, "./tmp");
  // },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + "-" + `${uniqueSuffix}.png`);
  },
});

const upload = multer({
  storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype === "image/png" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/jpeg" ||
      file.size <= 5 * 1024 * 1024
    ) {
      cb(null, true);
    } else {
      req.statusCode(404).json({ message: "Input mush be image" });
    }
  },
});

module.exports = upload;
