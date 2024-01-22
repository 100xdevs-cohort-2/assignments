// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.header.authorization;
  const jwttoken = token.replace("Bearer ", "");
  try {
    const decode = jwt.verify(jwttoken, JWT_SECRET);
    if (decode.username) {
      next();
    } else {
      res.json({
        msg: " authorizationn failed",
      });
    }
  } catch (error) {
    res.json({
      msg: "Something went wrong",
    });
  }
}

module.exports = adminMiddleware;
