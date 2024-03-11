const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const UserUsername = req.headers.username;
  const UserPassword = req.headers.password;

  User.findOne({
    username: UserUsername,
    password: UserPassword,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        msg: "User don't exists",
      });
    }
  });
}

module.exports = userMiddleware;
