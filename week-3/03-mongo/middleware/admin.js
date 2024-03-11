// Middleware for handling auth

const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const AdminUsername = req.headers.username;
  const AdminPassword = req.headers.password;
  Admin
    .findOne({
      username: AdminUsername,
      password: AdminPassword,
    })
    .then((value) => {
      if (value) {
        next();
      } else {
        res.status(403).json({
          msg: "Admin don't exists",
        });
      }
    });
}

module.exports = adminMiddleware;
