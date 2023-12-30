const bcryptjs = require("bcryptjs");
const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;

  const user = await Admin.findOne({ username: username });
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

module.exports = adminMiddleware;
