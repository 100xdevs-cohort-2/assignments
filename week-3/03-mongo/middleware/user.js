const bcryptjs = require("bcryptjs");
const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  const { username, password } = req.headers;

  const user = await User.findOne({ username: username });
  if (!user) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }

  const isPasswordValid = await bcryptjs.compare(password, user.password);
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "Invalid credentials!",
    });
  }

  next();
}

module.exports = userMiddleware;
