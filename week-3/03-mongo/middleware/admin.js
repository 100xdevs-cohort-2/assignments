const { Admin } = require("../db/index");

// Middleware for handling admin auth
async function adminMiddleware(req, res, next) {
  try {
    const { username, password } = req.headers;
    const admin = await Admin.findOne({ username, password });

    if (!admin) return res.status(401).json({ error: "Unauthorized" });

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
