const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const usn=req.headers.username;
    const pwd=req.headers.password;
    if(User.findOne({username:usn,password:pwd})){
        next();
    }
    else{
        res.status(403).send("User Authentication failed");
    }
}

module.exports = userMiddleware;