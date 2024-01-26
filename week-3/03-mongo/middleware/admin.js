const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  try {
    // Check if admin exists and credentials are valid
    const admin = await Admin.findOne({ username, password });

    if (!admin) {
      return res.status(401).json({ message: "Admin authentication failed" });
    }

    // Attach the admin object to the request for further use in routes
    req.admin = admin;

    next();
  } catch (error) {
    console.error("Error in adminMiddleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
