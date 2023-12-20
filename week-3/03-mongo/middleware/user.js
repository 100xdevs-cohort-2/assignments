const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  let username = req.headers.username;
  let password = req.headers.password;

  const user = await User.findOne({ username: username, password: password });

  if (user.username) {
    next();
  } else {
    res
      .status(505)
      .json({ msg: "This user is not authorized to perform this action" });
  }
}

module.exports = userMiddleware;
