const { User } = require("../db/index")

// Middleware for handling auth
function userMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    User.findOne({
        username : username,
        password : password
    })
        .then((value)=>{
            if(value){
                next();
            }
            else{
                res.status(403).json({
                    msg : "user Dosent exist"
                })
            }
        })
    // next();
}

module.exports = userMiddleware;