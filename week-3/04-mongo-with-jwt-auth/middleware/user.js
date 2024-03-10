const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.Authorization.split(" ")[1];
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        if(decoded.username) {
            next()
        }
        else {
            res.status(403).json({
                message: "You are authorized"
            })
        }
    } catch (err) {
        res.json({
            message: "Invalid input"
        })
    }
}

module.exports = userMiddleware;