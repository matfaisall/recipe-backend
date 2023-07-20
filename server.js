const express = require("express");
require("dotenv").config();
const poolClient = require("./src/config/db");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const Router = require("./src/router");

const app = express();
const port = 3100;

let corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.status(200).json({ status: 200, message: "server running" });
});

app.use(Router);

app.listen(port, () => {
  console.log(`aplikasi ini jalan di port ${port}`);
});

poolClient
  .connect()
  .then((client) => {
    console.log("Connected to POstgreSQL database");
    client.release();
  })
  .catch((error) => {
    console.log("Error connecting to the database", error);
  });
