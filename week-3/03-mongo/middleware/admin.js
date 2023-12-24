const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const [username, password] = [req.headers.username, req.headers.password];
  const existingAdmin = await Admin.findOne({ username: username });
  if (!existingAdmin) return res.send(404, { message: "ADMIN not found" });
  next();
}

module.exports = adminMiddleware;
