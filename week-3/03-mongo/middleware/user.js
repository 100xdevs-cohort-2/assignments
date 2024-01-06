const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    let userName = req.headers.username;
    let password = req.headers.password;
    let data = await User.findOne({username: userName, password: password});
    if(!data){
        res.status(404).json("Please enter correct User Info");
    }
    next();
}

module.exports = userMiddleware;