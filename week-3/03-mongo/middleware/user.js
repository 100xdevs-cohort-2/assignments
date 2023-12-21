const {User}=require('../db/index')
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    try{
        const username=req.headers.username;
        const password=req.headers.password;
        const user=await User.findOne({username,password});
        if(!user) throw new Error("invalid username and pwd")
        next();
    }
    catch(e){
        res.status(400).json({message:e.message});
    }
    
    
}

module.exports = userMiddleware;