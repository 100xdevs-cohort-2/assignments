const { Admin } = require("../db");
const jwtKey = "helloWorld";
const jwt = require("jsonwebtoken");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req.headers.token.split(" ");
  const checked = jwt.verify(token[1], jwtKey);
  checked ? next() : res.status(404).json({ message: "Admin not foun" });
}

module.exports = adminMiddleware;
