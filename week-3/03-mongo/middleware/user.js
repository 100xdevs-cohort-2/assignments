const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;

    const response = await User.findOne({ username: username, password: password});
    if(!response){
        res.status(403).json({message: "User doesn't exist"});
    }
    next();
}

module.exports = userMiddleware;