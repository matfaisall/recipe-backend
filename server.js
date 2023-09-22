const express = require("express");
require("dotenv").config();
const poolClient = require("./src/config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const Router = require("./src/router");

const app = express();
const port = 4000;

// use middleware package
let corsOptions = {
  origin: "*",
  // credintials: true,
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan("combined"));

// use multer
// app.use("/image", express.static("./tmp"));

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "Server running..." });
});

app.use(Router);

app.listen(port, () => {
  console.log(`aplikasi ini jalan di port ${port}`);
});

// check is DB Connected
poolClient
  .connect()
  .then((client) => {
    console.log("Connected to POstgreSQL database");
    client.release();
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
