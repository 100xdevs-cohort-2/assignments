const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.body;
  Admin.findOne({ username, password }).then((val) => {
    if (val) {
      next();
    } else {
      res.status(404).json({ msg: "admin not found" });
    }
  });
}

module.exports = adminMiddleware;
