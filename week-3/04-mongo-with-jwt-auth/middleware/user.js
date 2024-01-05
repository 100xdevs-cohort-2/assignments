const JWT_SECRET = require("../config");
const jwt = require("jsonwebtoken");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  try {
    const token = req.headers.authorization;

    const splitToken = token.split(" ")[1];
    const decoded = jwt.verify(splitToken, JWT_SECRET);

    if (decoded) {
      req.username = decoded;
      return next();
    }
    return res.status(401).json({ err: "User doesnt exists" });
  } catch (err) {
    next(err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
