const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const token = req.headers.authorization;
        if(!token){
            res.json({
                message:"Please pass in authentication token"
            })
        }
        const jwtToken = token.split(" ")?.[1];
        jwt.verify(jwtToken,JWT_SECRET)
        next()
    }catch(e){
        return res.status(403).json({
            message:"You are not authenticated"
        })
    }

}

module.exports = adminMiddleware;