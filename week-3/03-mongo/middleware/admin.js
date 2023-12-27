const { Admin, User, Course} = require("../db/index")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;

    try{
        let data = Admin.findOne({username:username, password:password});
        console.log(data);
        next();
    }
    catch(err){
        res.status(400).send("Username or password is incorrect");
    }
}

module.exports = adminMiddleware;