const {User} = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const currentUser=req.headers.username;
    const currentPassword=req.headers.password;
    User.findOne({
        username: currentUser,
        password: currentPassword
    }).then((validated)=>{
        if(validated)
            next();
        else{
            res.status(403).json({
                msg:"User not found"
            })
        }
    })
}

module.exports = userMiddleware;