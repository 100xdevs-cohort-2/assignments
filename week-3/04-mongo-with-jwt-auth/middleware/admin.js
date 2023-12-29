// Middleware for handling auth

const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;

  const words = token.split(" ");
  const jwtToken = words[1];

  const decodedValue = jwt.verify(jwtToken, jwtsecret);

  if (decodedValue.username) {
    next();
  } else {
    res.status(404).json({ msg: "You are not authenticated" });
  }
}

module.exports = adminMiddleware;
