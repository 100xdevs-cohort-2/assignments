const jwt = require("jsonwebtoken");
const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  try {
    const Bearertoken = req.headers.authorization;
    if (!Bearertoken.startsWith("Bearer")) {
      res.status(401).json({ message: "UNAUTHORIZED_INVALID_TOKEN" });
      return;
    }
    const arr = Bearertoken.split(" ");
    const token = arr[1];
    const verifiedToken = jwt.verify(token, process.env.JWT_PASSWORD);
    if (!verifiedToken) {
      res.status(401).json({ message: "UNAUTHORIZED_INVALID_TOKEN" });
      return;
    }
    const userExists = await User.findOne({ username: verifiedToken });
    if (!userExists) {
      res.status(403).json({ message: "USER_DOES_NOT_EXIST" });
      return;
    }
    req.locals = verifiedToken;
    next();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = userMiddleware;
