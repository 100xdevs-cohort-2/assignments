const { User } = require("../db/index.js");
async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  const user = await User.findOne({ username });
  if (!user) {
    res.send("User Not Registered!");
  }
  next();
}

module.exports = userMiddleware;
