const { Admin } = require("../db/index");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  username = req.headers.username;
  password = req.headers.password;

  Admin.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        message: "Admin does not exist!",
      });
    }
  });
}

module.exports = adminMiddleware;
