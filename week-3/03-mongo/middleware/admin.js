const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  const username = req.headers.userrname;
  const password = req.headers.password;
  if (!username || !password)
    return res.status(401).json({
      error: "Kamaal hai! Bhai headers me username or password toh dede?",
    });
  const ExisitingAdmin = await Admin.findOne({ username: username });
  if (!ExisitingAdmin) {
    return res.status(404).json({ error: "Bhai pehle register toh karle!" });
  }

  if (ExisitingAdmin.password == password) {
    res.status(200);
    next();
  }
}

module.exports = adminMiddleware;
