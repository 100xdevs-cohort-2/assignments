const { User } = require("../db");

function userMiddleware(req, res, next){
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB.

    const username = req.headers.username; // harkirat@gmail.com
    const password = req.headers.password; // 123456

    User.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }else {
            res.status(403).json({
                msg: "User doesn't exist"
            })
        }
    })
}

module.exports = userMiddleware;