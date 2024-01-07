const { JWT_SECRET } = require('../config/config')
const jwt = require('jsonwebtoken')

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const words = token.split(" ")
    const jwtToken = words[1]
    try {
        const authenticated = jwt.verify(jwtToken, JWT_SECRET)
        if (authenticated.username) {
            next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            msg: "Invalid Inputs"
        })
    }
}

module.exports = adminMiddleware;