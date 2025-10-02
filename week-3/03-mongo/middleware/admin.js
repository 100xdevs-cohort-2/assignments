const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const username = req.headers.username;
  const pwd = req.headers.password;

  Admin.findOne({
    username: username,
    password: pwd,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({ msg: "User doesn't exist" });
    }
  });
}

module.exports = adminMiddleware;
