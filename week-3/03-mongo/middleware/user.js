const { User } = require("../db/index");
// Implement user auth logic
// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).json({
        message: "User doesn't exists",
      });
    }
  });
}

module.exports = userMiddleware;
