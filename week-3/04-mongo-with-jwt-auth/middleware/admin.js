const jwt = require("jsonwebtoken")

const { JWT_SECRET_KEY } = require("../envData.js");
const { decode } = require("punycode");
// console.log(JWT_SECRET_KEY)

/*
    Middleware for handling auth
    Implement admin auth logic
    You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
*/
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    const words = token.split(" ")
    const jwtToken = words[1]

    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET_KEY)
        console.log(decodedValue, decodedValue.username)
        if (decodedValue.username) next()
        else res.status(410).json({
            msg: "admin authentication failed"
        })
    } catch (error) {
        res.status(410).json({
            msg: "admin authentication error"
        })
    }



}

module.exports = adminMiddleware;