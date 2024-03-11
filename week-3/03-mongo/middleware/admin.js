// Middleware for handling auth
const {Admin} = require("../db");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const currentUser=req.headers.username;
    const currentPassword=req.headers.password;
    Admin.findOne({
        username: currentUser,
        password: currentPassword
    }).then((validated)=>{
        if(validated)
            next();
        else{
            res.status(403).json({
                msg:"Admin not found"
            })
        }
    })
}

module.exports = adminMiddleware;