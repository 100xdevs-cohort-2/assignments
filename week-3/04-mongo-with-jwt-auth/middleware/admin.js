require('dotenv').config()
const jwt=require('jsonwebtoken')
function adminMiddleware(req, res, next) {
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader) throw new Error("no authorization header for admin");
        const token=authHeader.split(" ")[1];
        const valid=jwt.verify(token,process.env.ADMIN_SECRET);
        if(!valid) throw new Error("ACCESS DENIED");
        next();
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

module.exports = adminMiddleware;