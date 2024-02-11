const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const username = req.headers.username;
  const password = req.headers.password;
  try {
    const isValidUser = await Admin.findOne({
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

module.exports = adminMiddleware;
