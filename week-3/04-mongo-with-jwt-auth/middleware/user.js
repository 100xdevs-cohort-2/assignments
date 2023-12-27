const { User } = require("../db");
const jwt = require("jsonwebtoken");
const secret = "secret";

async function userMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    let result = "";
    try {
      result = await jwt.verify(authorization.slice(7), secret);
    } catch (err) {
      return res
        .status(403)
        .json({ err: "Authentication failed: Invalid Token." });
    }

    const user = await User.findOne({ username: result });
    if (!user) {
      return res
        .status(401)
        .json({ err: "Authentication failed: user not found." });
    }

    req.user = user;

    next();
  } catch (error) {
    console.error(error);
    res.status(500).json({ err: "An error occurred during authentication." });
  }
}

module.exports = userMiddleware;
