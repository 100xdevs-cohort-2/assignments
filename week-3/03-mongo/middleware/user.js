const { User } = require("../db/index");
const { userSchema } = require("../schema");

/**
 * Middleware function to verify user authentication and access control.
 * This middleware checks if the user making the request is a user.
 * If it is a valid user, it allows access to the next middleware or route handler.
 * If not, it returns a response with 401 status code.
 * @param {import('express').Request} req
 * @param {import('express').Response} res
 * @param {import('express').NextFunction} next
 * @returns {Promise<void>}
 */
async function userMiddleware(req, res, next) {
  const { username, password } = req.headers;
  if (!userSchema.safeParse({ username: username, password: password }).success) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  const user = await User.where({ username: username }).findOne();
  if (!user) {
    return res.status(401).json({ error: "Invalid credentials" });
  }
  req.user = user;
  next();
}

module.exports = userMiddleware;
