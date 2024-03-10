const { userModel } = require("../db/index");
function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const user = userModel.findOne({
    username: req.headers.username,
    password: req.headers.password,
  });
  if (user) {
    next();
  } else {
    res.status(403).send("Forbidden");
  }
}

module.exports = userMiddleware;
