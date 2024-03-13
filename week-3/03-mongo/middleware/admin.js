const { Admin } = require("../db/index");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  if (
    await Admin.findOne({
      username: req.headers.username,
      password: req.headers.password,
    })
  ) {
    next();
  } else {
    res.status(401).send("Admin not present");
  }
}

module.exports = adminMiddleware;
