// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    
    const token = req.headers.authorization;
    const words = token.split(" "); //return array
    const jwttoken  = words[1];

    try {
        const decodeValue = jwt.verify(jwttoken,JWT_SECRET);
        if (decodeValue.username) {
            next();
        } else {
            res.status(403),json({
                msg: "You are not authenticated"
            })
        }
    } catch (error) {
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;