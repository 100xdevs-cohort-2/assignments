const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");


// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.Authorization;
    const jwtTokent = token.split(" ")[1];
    try {
        const decoded = jwt.verify(jwtTokent, JWT_SECRET);
        if (decoded.username) {
            next()
        } else  {
            res.status(403).json({
                message: "You are not authenticated"
            })
        }
    } catch (err) {
        res.json({
            message: "Invalid Inputs"
        })
    }
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;