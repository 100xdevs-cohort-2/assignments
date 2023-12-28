// Middleware for handling auth
const jwt= require('jsonwebtoken');
const jwtPassword="1234";

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    
    try{
        let auth= req.headers.authorization;
        let parts=auth.split(' ');
        let token=parts[1];
        // console.log(token);
        const decoded=jwt.verify(token,jwtPassword);
        req.username=decoded.username;
        next();
    }
    catch(err){
        res.status(403).json({message:"Invalid token"})
    }

}

module.exports = adminMiddleware;