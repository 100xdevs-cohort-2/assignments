const { Admin } = require("../db/index")
const jwt = require("jsonwebtoken");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin
    //         from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.token;
    try {
        jwt.verify(token, "password")
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" })
    }

}

module.exports = adminMiddleware;