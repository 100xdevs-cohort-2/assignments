const { Admin } = require("../db");
const bcrypt = require("bcrypt");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  try {
    const { username, password } = req.headers;

    const admin = await Admin.findOne({ username: username });
    if (!admin) {
      return res
        .status(401)
        .json({ err: "Authentication failed: user not found." });
    }

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ err: "Authentication failed: incorrect password." });
    }

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "An error occurred during authentication." });
  }
}

module.exports = adminMiddleware;
