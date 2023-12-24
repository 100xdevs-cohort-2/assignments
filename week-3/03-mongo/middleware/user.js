const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const UserName = User.findOne({ 'userName': req.headers.userName })
    .lean()
    .then(function (user) {
      if (!user.password == req.headers.password) {
        return next(new Error("Invalid Username or Password"));
      }
    });
  res.json("Admin Found");
  next();
}

module.exports = userMiddleware;