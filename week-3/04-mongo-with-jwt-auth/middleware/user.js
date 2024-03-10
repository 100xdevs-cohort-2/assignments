const { User } = require("../db");
const jwtKey = "helloWorld";
const jwt = require("jsonwebtoken");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.token.split(" ");
  const checked = jwt.verify(token[1], jwtKey);
  checked ? next() : res.status(404).json({ message: "User not foun" });
}

module.exports = userMiddleware;
