const jwt = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    const token = req.headers.authorization;
    // console.log(req.headers);
    const words = token.split(" ");
    const jwtToken = words[1];
    // console.log(jwtToken);
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    // console.log(decodedValue);
    if(decodedValue.username){
        next();
    }else{
        res.status(403).json({msg: "You are not authenticated"})
    }
}

module.exports = adminMiddleware;