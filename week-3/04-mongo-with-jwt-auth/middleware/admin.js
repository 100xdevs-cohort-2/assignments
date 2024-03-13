const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const words = req.headers.authorization.split(' ');
    const token = words[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    if(decoded.username) {
        next();
    }else{
        res.status(403).json({
            message : "User is not authenticated"
        })
    }
}

module.exports = adminMiddleware;