const jwt = require("jsonwebtoken");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const token = req?.headers?.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Unauthorized" });
  }
  try {
    jwt.verify(token, process.env.JWT_KEY, (err, data) => {
      if (err) {
        return res.status(401).send({ message: "Unauthorized" });
      }
      req._id = data._id;
      next();
    });
  } catch (error) {
    return res
      .status(500)
      .send({ message: "Error verying token", error: error });
  }
}

module.exports = adminMiddleware;
