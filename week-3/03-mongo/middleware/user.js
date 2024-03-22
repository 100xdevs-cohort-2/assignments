const { User } = require("../db/index");
function userMiddleware(req, res, next) {
  const username = req.header.username;
  const password = req.headers.password;
  User.findOne({
    username: username,
    password: password,
  }).then((value) => {
    if (value) {
      next();
    } else {
      res.status(403).send("user pta ni kya kr rha hai pr yha ni hai");
    }
  });

  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
