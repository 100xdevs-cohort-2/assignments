const {Admin} = require("../db");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;
    let response = Admin.findOne({username, password});

    console.log(response, "authenticator");
    if(response){
        next();
    }else{
        res.status(403).json({message:"Admin doesn't exist"})
    }
}

module.exports = adminMiddleware;