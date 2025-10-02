const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
  const auth_header = req.headers.authorization;
  const token = auth_header.split(" ")[1];

  try {
    const admin = jwt.verify(token, JWT_SECRET);
    if (admin.username){
      // adding username to prevent user sending 
      // another username in the header
      // and better for accessing in other routes
      req.username = admin.username;
      next();
    } else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (e) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = adminMiddleware;
