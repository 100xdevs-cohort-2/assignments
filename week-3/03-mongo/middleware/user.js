const { User } = require("../db/index");
// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
function userMiddleware(req, res, next) {
  const username = req.header.username;
  const password = req.header.password;
  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        message: "Admin doesn't exists",
      });
    }
  });
}

module.exports = userMiddleware;
