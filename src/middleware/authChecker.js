const jwt = require("jsonwebtoken");
require("dotenv").config();

const AuthChecker = async (req, res, next) => {
  try {
    let { authorization } = req.headers;
    let bearer = authorization.split(" ");

    // console.log(bearer);

    const decoded = await jwt.verify(bearer[1], process.env.JWT_TOKEN);
    console.log("decoded: ", decoded);

    // console.log(req.payload);
    req.payload = decoded;
    next();
  } catch (error) {
    return res.status(404).json({
      status: 404,
      message: "your token not valid!!",
      error,
    });
  }
};

module.exports = { AuthChecker };
