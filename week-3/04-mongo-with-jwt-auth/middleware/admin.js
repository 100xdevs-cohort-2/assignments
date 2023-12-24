// Middleware for handling auth
const jwt = require('jsonwebtoken');
require('dotenv').config()
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let token = req.headers.authorization;
    try{
        jwt.verify(token, process.env.jwtPassword);
        next();
      } catch (err){
        res.status(404).json({
            message: "Invalid token"
        })
      }
}

module.exports = adminMiddleware;