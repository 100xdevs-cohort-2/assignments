const { Admin } = require("../db");
const jwt = require('jsonwebtoken')
const jwt_secret = 'sdfsahywkeky7w79w'

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization
    const words = token.split('');
    const jwtToken = words[1];
    try{
        const decodeValue = jwt.verify(jwtToken, jwt_secret);
        if (decodeValue.username){
            next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            })
        }
    } catch(e){
        res.json({
            msg: "Incorrect inputs"
        })
    }
}

module.exports = adminMiddleware;