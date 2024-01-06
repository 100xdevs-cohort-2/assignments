const jwt = require("jsonwebtoken");
const { User } = require("../db/index");

const KEY = "us3rTopS3cr3t";

// Middleware for handling user auth
async function userMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;

    if (!authorization || !authorization.startsWith("Bearer "))
      return res.status(401).json({ error: "Unauthorized - Token missing or invalid" });

    const token = authorization.split(" ")[1];

    jwt.verify(token, KEY, async (err, decoded) => {
      if (err) return res.status(401).json({ error: "Unauthorized - Invalid token" });

      const { username } = decoded;
      const user = await User.findOne({ username });

      if (!user) return res.status(401).json({ error: "Unauthorized - User not found" });

      req.user = user;
      next();
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = { userMiddleware, KEY };
