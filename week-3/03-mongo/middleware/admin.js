// Middleware for handling auth
const { Admin } = require("../db/index");
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const { username, password } = req.headers;
  const userExists = await Admin.findOne({
    username: username,
    password: password,
  });
  if (!userExists) {
    res.send("Admin doesn't exist in databse");
    return;
  }
  next();
}

module.exports = adminMiddleware;
