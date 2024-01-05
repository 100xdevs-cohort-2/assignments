// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const token = req.headers.authorization;
    const splitToken = token.split(" ")[1];
    const decoded = jwt.verify(splitToken, JWT_SECRET);

    if (!decoded.username) {
      return res.status(403).json({ err: "Admin doesnt exists" });
    }

    next();
  } catch (err) {
    next(err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
