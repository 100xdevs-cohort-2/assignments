// Middleware for handling auth
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        jwt.verify(req.headers.authorization,process.env.JWTPASSWORD)
        next()
    } catch (error) {
        res.status(403).json({
            message:"Invalid token!"
        })
    }
}

module.exports = adminMiddleware;