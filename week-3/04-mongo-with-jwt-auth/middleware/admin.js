const jwt = require("jsonwebtoken");
const { Admin } = require("../db/index");

const KEY = "adminTopS3cr3t";

// Middleware for handling admin auth
async function adminMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Unauthorized - Token missing or invalid" });

    const token = authorization.split(" ")[1];

    jwt.verify(token, KEY, async (err, decoded) => {
      if (err) return res.status(401).json({ error: "Unauthorized - Invalid token" });

      const { username } = decoded;
      const admin = await Admin.findOne({ username });

      if (!admin) return res.status(401).json({ error: "Unauthorized - Admin not found" });

      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { adminMiddleware, KEY };
