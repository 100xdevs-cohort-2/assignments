const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const isValidUser = await User.findOne({
      username: username,
      password: password,
    });
    if (isValidUser) {
      next();
    } else {
      return res.status(401).send({ message: "Unauthorized" });
    }
  } catch {
    return res.status(404).send({ message: "Not Found" });
  }
}

module.exports = userMiddleware;
