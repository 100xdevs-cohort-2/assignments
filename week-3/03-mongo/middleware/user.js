const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  if (
    await User.findOne({
      username: req.headers.username,
      password: req.headers.password,
    })
  ) {
    next();
  } else {
    res.status("401").send("User not present");
  }
}

module.exports = userMiddleware;
