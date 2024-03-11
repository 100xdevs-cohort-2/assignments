const { User } = require("../db");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const userName = req.headers.username;
  const Password = req.headers.password;


  const userAuthed = User.findOne({ username: userName, password: Password });

  if (!userAuthed) {
    return res.status(400).send("User name doesn't exists");
  }
  res.send("User exists");
  next();
}

module.exports = userMiddleware;
