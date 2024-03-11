// Middleware for handling auth
const jwt = require("jsonwebtoken");
const {JWT_SECRET}= require("../config");
function adminMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const words= req.headers.authorization.split(" ");
    const token=words[1];
     try{
        jwt.verify(token,JWT_SECRET);
        next();
     }
     catch(err){

        res.sendStatus(401);  

    } 
}

module.exports = userMiddleware;