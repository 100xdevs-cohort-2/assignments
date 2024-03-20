const jwt = require("jsonwebtoken"); 
const {jwtPassWord} = require("../config"); 
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization; 
    try 
    {
        jwt.verify(token,jwtPassWord); 
        next(); 
        return; 
    }
    catch(err)
    {
        return res.status(404).json({msg : "Wrong token"}); 
    }

}

module.exports = adminMiddleware;



