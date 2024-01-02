const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const admin = await Admin.findOne({ userName: req.headers.userName });

  if (!admin.password == req.headers.password) {
    return next(new Error("Invalid Username or Password"));
  }
  res.json("Admin Found" + admin);
  next();
}

module.exports = adminMiddleware;
