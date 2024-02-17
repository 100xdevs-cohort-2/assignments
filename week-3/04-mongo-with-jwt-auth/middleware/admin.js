// Middleware for handling auth
const jwt = require('jsonwebtoken')

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const tokenString = req.headers.Authorization;
    const matchResult = tokenString.match(/^Bearer\s(.+)$/);

    try{
        jwt.verify(matchResult[1], 'secret');
    }
    catch {
        return res.status(401).json({
            msg: "Not authenticated User"
        });
    }
    next();
}

module.exports = adminMiddleware;