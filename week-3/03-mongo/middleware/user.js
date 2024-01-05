const {User} = require("../db/index");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const checkUsername = await User.findOne({ username: username });
    const checkPassword = await User.findOne({password: password});

    if(checkUsername !== null && checkPassword !== null){
        next();
    } else {
    res.json({message: "Username or password not valid"});
    }
}

module.exports = userMiddleware;