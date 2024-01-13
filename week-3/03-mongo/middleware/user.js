const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  const userExists = await User.findOne({
    username: username,
    password: password,
  });
  if (!userExists) {
    res.send("User doesn't exist in databse");
    return;
  }
  next();
}

module.exports = userMiddleware;
