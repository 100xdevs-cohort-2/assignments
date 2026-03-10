const jwt = require('jsonwebtoken')
const {JWT_SECRET} = require('../config')
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization
    const words = token.split(' ');
    const jwtToken = words[1];
    try {
        const verifyJwt = jwt.verify(jwtToken, JWT_SECRET);
        if (!verifyJwt.username) {
            return res.json({
                msg: "you are not auhtenticated"
            })
        }
        next()
    } catch (error) {
        return res.json({
            msg: "invalid inputs"
        })
    }
}

module.exports = adminMiddleware;