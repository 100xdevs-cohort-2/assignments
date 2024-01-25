const {User}=require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const {username,password}=req.headers;

    await User.findOne({username,password})
    .then((value)=>{
        if(value){
            next();
        }else{
            res.status(400).json({message:"user does not exist!"})
        }
    })
}

module.exports = userMiddleware;