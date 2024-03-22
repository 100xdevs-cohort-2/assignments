const { User } = require("../db/index");
const jwt = require("jsonwebtoken");
const secret = "secret";
function userMiddleware(req, res, next) {
  try {
    const { authorization } = req.headers;
    let result = "";
    try {
      result = jwt.verify(authorization.slice(7), secret);
    } catch (err) {
      return res
        .status(403)
        .json({ err: "Authentication failed: Invalid Token." });
    }

    const user = User.findOne({
      username: req.headers.username,
      password: req.headers.password,
    });
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
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
