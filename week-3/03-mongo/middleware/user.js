const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  if (!username || !password) {
    return res.status(400).send({ message: "Invalid username or password" });
  }
  const user = await User.findOne({ username: username, password: password });
  if (!user) {
    return res.status(400).send({ message: "User not found" });
  } else {
    req.user = user;
    next();
  }
}

module.exports = userMiddleware;
