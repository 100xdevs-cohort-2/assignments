// Middleware for handling auth
const jwt=require("jsonwebtoken")
const {JWT_SECRET}=require("../config")
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try {
        const token = req.headers.authorization;
        console.log('Token:', token);
        const jwtToken = token.split(" ")[1];
       
        console.log('JWT Token:', jwtToken);
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        console.log("Decoded Value:", decodedValue);
      
        
        if (decodedValue.username){
        next()
        } else {
            res.status(403).json({
                msg: "You are not authenticated"
            });
        }
    }
catch(error){
    console.error("JWT Verification Error:", error);
   
}
}

module.exports = adminMiddleware;