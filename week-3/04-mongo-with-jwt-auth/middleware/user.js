const jwt=require("jsonwebtoken");
const jwtSecret="ynscuywuiqhdsnwer";
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const token=req.headers["authorization"].split(" ")[1];
    try{
        const decoded=jwt.verify(token,jwtSecret);
        req.headers['username']=decoded.username;
    }
    catch(err){
        res.status(401).send(err.message);
    }
    next();
}

module.exports = userMiddleware;