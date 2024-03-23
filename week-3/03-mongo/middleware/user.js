const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;    // asjk@gmail.com
    const password = req.headers.password;    // 38245

    User.findOne({
        username: username,
        password: password
    })
    .then(function(value) {
        if(value) {
            next();
        } else {
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;