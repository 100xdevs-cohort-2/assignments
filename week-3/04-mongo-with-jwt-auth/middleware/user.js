const jwt = require("jsonwebtoken");
const { User } = require("../db/index");

const jwtPassword = process.env.JWT_PASSWORD;

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
  const token = req.headers.authorization?.replace("Bearer ", "");
  try {
    const result = jwt.verify(token, jwtPassword);
    const user = await User.where({ username: result.username }).findOne();
    req.user = user;
    next();
  } catch (error) {
    console.log("error: ", error);
    return res.status(401).json({ error: "Invalid credentials" });
  }
}

module.exports = userMiddleware;
