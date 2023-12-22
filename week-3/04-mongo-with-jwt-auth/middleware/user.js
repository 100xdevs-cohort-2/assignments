require('dotenv').config()
const jwt=require('jsonwebtoken')
function userMiddleware(req, res, next) {
    try{
        const authHeader=req.headers.authorization;
        if(!authHeader) throw new Error("no authorization header for admin");
        
        const token=authHeader.split(" ")[1];
        const valid=jwt.verify(token,process.env.USER_SECRET);
        if(!valid) throw new Error("ACCESS DENIED");

        const username=jwt.decode(token).username;
        req.headers.username=username;

        next();
    }
    catch(e){
        res.status(400).json({message:e.message})
    }
}

module.exports = userMiddleware;