const { User } = require("../db");
const bcrypt = require("bcrypt");

async function userMiddleware(req, res, next) {
  try {
    const { username, password } = req.headers;

    const user = await User.findOne({ username: username });
    if (!user) {
      return res
        .status(401)
        .json({ err: "Authentication failed: user not found." });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ err: "Authentication failed: incorrect password." });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "An error occurred during authentication." });
  }
}

module.exports = userMiddleware;
