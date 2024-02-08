// Middleware for handling auth
const jwt = require('jsonwebtoken')

const {JWT_SECRET} = require('../config')

function adminMiddleware(req, res, next) {

    const token = req.headers.authorization
    const words = token.split(" ");
    const jwtToken = words[1]
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET)
    console.log(decodedValue.username)
    if(decodedValue.username){
        next()
    }
    else[
        res.status(403).json({
            msg : "You are not authenticated"
        })
    ]
}

module.exports = adminMiddleware;