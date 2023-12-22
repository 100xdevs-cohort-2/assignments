const { Admin } = require("../db/index");
const { userSchema } = require("../schema");

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
  const { username, password } = req.headers;
  if (!userSchema.safeParse({ username: username, password: password }).success) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const admin = await Admin.where({ username: username }).findOne();
  if (!admin) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  next();
}

module.exports = adminMiddleware;
