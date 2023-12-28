const { User } = require("../db");

function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.header.password;

  if (!username || !password) {
    return res.status(401).json({
      message: "Kamaal hai! Bhai headers me username or password toh dede?",
    });
  }

  const ExistingUser = User.findOne({ username: username });
  if (!ExistingUser) {
    return res.status(401).send("Bhai pehle register toh karle :)");
  }

  if (ExistingUser.password == password) {
    res.status(200);
    next();
  }
}

module.exports = userMiddleware;
