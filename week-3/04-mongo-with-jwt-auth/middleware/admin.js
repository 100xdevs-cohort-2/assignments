const jwt = require("jsonwebtoken");

// Middleware for handling auth
function adminMiddleware(Admin, jwtSecret) {
  return (req, res, next) => {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      res.status(401).json({ error: "Invalid Auth Header" });
    }

    //verify token
    try {
      const decodedToken = jwt.verify(token, jwtSecret);
      next();
    } catch (err) {
      console.log(err);
      res.json({ error: "Invalid token" });
    }
  };
}

module.exports = adminMiddleware;
