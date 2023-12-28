const { User } = require("../db");

async function userMiddleware(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;

  if (!username || !password) {
    return res.status(401).json({
      message:
        "Middleware: Kamaal hai! Bhai headers me username or password toh dede?",
    });
  }

  const ExistingUser = await User.findOne({ username: username });
  if (!ExistingUser) {
    return res.status(401).send("Middleware: Bhai pehle register toh karle :)");
  }

  if (ExistingUser.password === password) {
    res.status(200);
    next();
  }
}

module.exports = userMiddleware;
