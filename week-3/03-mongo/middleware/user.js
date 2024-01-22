const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const checkUser = await User.findOne({
        username,
        password
    })
    if(checkUser)
    {
        next();
    }
    else{
        res.status(403).json({
            message : "User not found in the database"
        })
    }
}

module.exports = userMiddleware;