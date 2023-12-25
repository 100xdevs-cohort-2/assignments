const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  try {
    const { username, password } = req.headers;
    if (!username || !password) {
      return res
        .status(401)
        .json({ error: "Username and Password are required" });
    }

    const admin = await Admin.findOne({
      username: username,
      password: password,
    });
    if (!admin) {
      return res.status(401).json({ Error: "Unauthorised Access" });
    }

    next();
  } catch (err) {
    console.log(err);
    next(err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

module.exports = adminMiddleware;
