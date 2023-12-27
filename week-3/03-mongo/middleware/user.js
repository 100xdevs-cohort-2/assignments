const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  if (User.findOne({ username, password })) {
    next();
  } else {
    res.status(404).send("User doesn't exists");
  }
}

module.exports = userMiddleware;
