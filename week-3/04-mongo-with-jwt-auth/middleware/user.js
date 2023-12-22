
const jwt = require("jsonwebtoken");
const dotenv = require('dotenv').config()
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        jwt.verify(req.headers.authorization,process.env.JWTPASSWORD)
        next()
    } catch (error) {
        res.status(403).json({
            message:"Invalid token!"
        })
    }
}

module.exports = userMiddleware;