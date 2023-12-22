const jwt = require("jsonwebtoken");

const jwtPassword = process.env.JWT_PASSWORD;

/**
 * Middleware function to verify admin authentication and access control.
 * This middleware checks if the user making the request is an admin.
 * If the user is an admin, it allows access to the next middleware or route handler.
 * If not, it returns a response with 401 status code.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
async function adminMiddleware(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");
  try {
    jwt.verify(token, jwtPassword);
    next();
  } catch (error) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
}

module.exports = adminMiddleware;
