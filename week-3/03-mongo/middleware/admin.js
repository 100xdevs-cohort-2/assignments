const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const usn=req.headers.username;
    const pwd=req.headers.password;
    if(Admindmin.findOne({username:usn,password:pwd})){
        next();
    }
    else{
        res.status(403).send("Admin Authentication failed");
    }
}

module.exports = adminMiddleware;