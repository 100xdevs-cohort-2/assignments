const jwt=require("jsonwebtoken"); 
const {jwtPassWord} = require("../config"); 
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization; 
    try 
    {
        jwt.verify(token,jwtPassWord); 
        next();
        return ;  
    }
    catch(err)
    {
        return res.status(404).json({msg : "Wrong token"}); 
    }

}

module.exports = userMiddleware;