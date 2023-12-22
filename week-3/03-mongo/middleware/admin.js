// Middleware for handling auth
const { Admin } = require("../db/index");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const admin =await  Admin.find({username:req.headers.username,password:req.headers.password});
    // console.log(admin);
    if(admin) {
        next();
    }else{
        res.status(403).json({
            message:"Invalid username or password!"
        })
    }
    
}

module.exports = adminMiddleware;