const { User } = require("../db/index");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  try {
    const { username, password } = req.headers;
    if (!username || !password) {
      res.status(401).json({ error: "Username and password are required" });
    }
    const isValidUser = await User.findOne({ userName: username });
    if (!isValidUser) {
      res.status(401).json({ error: "User Not Found" });
    }
    next();
  } catch (err) {
    next(err);
    res.status(500).json({ Error: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
