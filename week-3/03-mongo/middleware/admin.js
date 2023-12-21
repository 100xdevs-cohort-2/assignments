// Middleware for handling auth
const {Admin}=require('../db/index')
async function adminMiddleware(req, res, next) {
    
    try{
        const username=req.headers.username;
        const password=req.headers.password;
        if(!username || !password) throw new Error("no username or password sent in header")
        const admin=await Admin.findOne({username,password});
        if(!admin)   throw new Error("no admin access");
        next();

    }
    catch(e){
        return res.status(400).json({message:e.message})
    }
    
}

module.exports = adminMiddleware;