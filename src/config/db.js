const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  // host: process.env.DB_HOST,
  // post: process.env.DB_PORT,
  // database: process.env.DB_DATABASE,
  // user: process.env.DB_USER,
  // password: process.env.DB_PASSWORD,

  host: "localhost",
  user: "postgres",
  password: "matfaisall",
  database: "restaurant",
  post: 5432,
});

module.exports = pool;
