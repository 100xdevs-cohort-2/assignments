// Middleware for handling auth
const { Admin } = require("../db/index");
const jwt = require("jsonwebtoken");
const secret = "secret";
function adminMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    let result = "";
    try {
      result = jwt.verify(authorization.slice(7), secret);
    } catch (err) {
      return res
        .status(403)
        .json({ err: "Authentication failed: Invalid Token." });
    }

    const admin = Admin.findOne({
      username: req.headers.username,
      password: req.headers.password,
    });
    if (!admin) {
      return res
        .status(401)
        .json({ err: "Authentication failed: user not found." });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "An error occurred during authentication." });
  }

  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
