// Middleware for handling auth
const jwt=require("jsonwebtoken");
const jwtSecret="ynscuywuiqhdsnwer";
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token=req.headers["authorization"].split(" ")[1];
    try{
        const decoded=jwt.verify(token,jwtSecret);
        req.headers['username']=decoded.username;
    }
    catch(err){
        res.send(err.message);
    }
    next();
}

module.exports = adminMiddleware;