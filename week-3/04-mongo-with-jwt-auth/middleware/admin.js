// Middleware for handling auth
const Jwt = require("jsonwebtoken");
const JwtSecret = process.env.JWT_SECRET || 'defaultSecret';

const { validateToken } = require("../utils/utils");


async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    return await validateToken(req, res, next);
}

module.exports = adminMiddleware;