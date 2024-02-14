const { User } = require("../db/index")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password: password
    }).then(function(response){
        if (response){
            next();
        } else {
            res.status(403).json({
                message: "Invalid credentials!"
            })
        }
    })
}

module.exports = userMiddleware;