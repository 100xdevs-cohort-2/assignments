const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.header;
  const admin = await Admin.findOne({
    username,
    password,
  });
  if (admin) {
    next();
  } else {
    return res.status(404).json({ msg: "Unauthorized User" });
  }
}

module.exports = adminMiddleware;
