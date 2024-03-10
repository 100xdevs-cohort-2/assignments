// Middleware for handling auth
const { adminModel } = require("../db/index");
console.log(adminModel);
function adminMiddleware(req, res, next) {
  const admin = adminModel.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (admin) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
