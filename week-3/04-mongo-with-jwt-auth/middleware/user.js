const { JWT_SECRET } = require("../config");
const jwt=require('jsonwebtoken');

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try {
        const token =req.headers.authorization;
        const words=token.split(" ");
        const jwtToken=words[1];
        const decoded=jwt.verify(jwtToken,JWT_SECRET);
        if(decoded.username)
        {
            req.username=decoded.username;
            next();
        }
        else{
            res.status(403).json({msg : "User not authorised"})
        }
        
    } catch (error) {
        res.json({msg : "Invalid Input"})
        // console.log(error);
    }
}

module.exports = userMiddleware;