const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    const { username , password } = req.headers;

    const user = await User.findOne({ 
        username : username,
        password: password
    });
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    if(user){
        next();
    }else{
        res.status(403).json({
            msg: "User doesnt exist"
        });
    }
}

module.exports = userMiddleware;