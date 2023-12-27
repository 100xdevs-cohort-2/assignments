
const jwt = require('jsonwebtoken');
const AdminSecret = "Admin";
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        console.log("Entered");
        console.log(req.headers);
        const jwtToken = req.headers.authorization;
        console.log(jwtToken);
        const verification = jwt.verify(jwtToken,AdminSecret);
        if(verification){
            req.Admin = verification;
            next();
        }else{
            res.json({message:"Invalid Token"})
        }

    }catch(err){
        res.status(500).json({err});
    }
}

module.exports = adminMiddleware;