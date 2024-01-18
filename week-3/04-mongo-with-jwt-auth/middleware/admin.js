const jwt = require('jsonwebtoken')
const { JWT_SECRET } = require("../config");


function adminMiddleware(req, res, next) {
    
    const token = req.headers.authorization
    const words = token.split(" ");
    const jwtToken = words[1];


   const verifiedToken =   jwt.verify(jwtToken,JWT_SECRET);
   if(verifiedToken.username){
    const email = verifiedToken.username;
    next();
   }
   else{
    res.status(403).json({
        msg: "You are not authenticated"
    })
   }
}

module.exports = adminMiddleware;