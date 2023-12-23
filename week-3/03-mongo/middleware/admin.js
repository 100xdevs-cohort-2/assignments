// Middleware for handling auth'

const { Admin } = require("../db");

function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const userName = req.headers.username;
  const Password = req.headers.password;


  const userAuthed = Admin.findOne({ username: userName});

  if (!userAuthed) {
    return res.status(400).send("User name not found");
  }
  // res.send("User exists")
  next();
}

module.exports = adminMiddleware;
