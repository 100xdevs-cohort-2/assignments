// Middleware for handling auth
const { Admin } = require("../db");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. 
    //Check readme for the exact headers to be expected
    
    const username = req.headers.username;
    const password = req.headers.password;

    const checkUsername = await Admin.findOne({ username: username });
    const checkPassword = await Admin.findOne({password: password});

    if(checkUsername !== null && checkPassword !== null){
        next();
    } else {
    res.json({message: "Username or password not valid"});
    }
}
    
module.exports = adminMiddleware;