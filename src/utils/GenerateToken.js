let jwt = require("jsonwebtoken");
require("dotenv").config();

const GenerateToken = (data) => {
  let token = jwt.sign(data, process.env.JWT_TOKEN);
  return token;
};

module.exports = GenerateToken;
