const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    
    const {username , password} = req.headers;
    const findUser = await User.findOne({username : username, password: password});
    if(findUser){
        next();
    }else{
        res.send("Please Enter the valid data");
    }


}

module.exports = userMiddleware;