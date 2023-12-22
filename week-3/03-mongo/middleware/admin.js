const { Admin } = require("../db/index.js");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  const admin = await Admin.findOne({ username });
  if (!admin) {
    res.send({ msg: "Admin not registered!!" });
  }
  next();
}

module.exports = adminMiddleware;
