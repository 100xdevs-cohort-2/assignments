const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization;
        const words = token.split(" ");
        const jwtToken = words[1];
        const verifiedValue = jwt.verify(jwtToken, JWT_SECRET);
        if (verifiedValue.username) {
            next();
    } else {
        res.status(403).json({
            msg: "Your authentication failed"
        })
    }
    } catch (error) {
        res.json({
            msg: "Wrong token"
        })
    }
    
}

module.exports = adminMiddleware;