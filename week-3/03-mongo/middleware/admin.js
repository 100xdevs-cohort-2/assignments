const { Admin } = require("../db");

// Middleware for handling auth
async   function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let userName = req.headers.username;
    let password = req.headers.password;
    let data = await Admin.find({username: userName, password: password});
    if(data=== undefined){
        res.status(404).json("Please enter correct Admin Info");
    }
    next();
}


module.exports = adminMiddleware;