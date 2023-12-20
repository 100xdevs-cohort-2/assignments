const { User } = require("../db/index");

// Middleware for handling user auth
async function userMiddleware(req, res, next) {
  try {
    const { username, password } = req.headers;
    const user = await User.findOne({ username, password });

    if (!user) return res.status(401).json({ error: "Unauthorized" });

    req.user = user;
    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
