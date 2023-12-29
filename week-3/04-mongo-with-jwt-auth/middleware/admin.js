// Middleware for handling auth
const jwt = require("jsonwebtoken");
const jwtAdminSecret = "Admin";

function adminMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  const [bearer, actualToken] = authToken.split(" ");

  try {
    const authorizedAdmin = jwt.verify(actualToken, jwtAdminSecret);
    if (authorizedAdmin) {
      res.status(200);
      next();
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: "Bhaiya ji valid token dedete toh badhiya rehta!" });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;
