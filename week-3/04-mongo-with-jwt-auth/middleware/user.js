const jwt= require('jsonwebtoken');
const jwtPassword="1234";

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
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
    }xz 
}

module.exports = userMiddleware;