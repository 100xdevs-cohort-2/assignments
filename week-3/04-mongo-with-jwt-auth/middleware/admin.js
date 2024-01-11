// Middleware for handling auth
require("dotenv").config();
const jwt = require("jsonwebtoken");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { token } = req.headers;

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    next();
  } catch (e) {
    res.send("access denied");
  }
}

module.exports = adminMiddleware;
