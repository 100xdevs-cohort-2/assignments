const  {User} = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let username = req.headers.username;
    let password = req.headers.password;
    let response = User.findOne({username, password});

    console.log(response);
    if(response){
        next();
    }else{
        res.status(403).json({message:"User doesn't exist"})
    }
}

module.exports = userMiddleware;