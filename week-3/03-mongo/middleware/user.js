const { User } = require("../db");

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const pwd = req.headers.password;

  User.findOne({
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

module.exports = userMiddleware;
