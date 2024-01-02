const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const user = await User.findOne({ userName: req.headers.userName });

  if (!user.password == req.headers.password) {
    return next(new Error("Invalid Username or Password"));
  }

  res.json("User Found" + user);
  next();
}

module.exports = userMiddleware;
