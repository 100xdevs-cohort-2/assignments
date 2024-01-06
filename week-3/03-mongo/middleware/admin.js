const { Admin } = require('../db');

// Middleware for handling auth

function adminMiddleware(req, res, next){
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB.
    // username and password will be present in the header


    const username = req.headers.username; // harkirat@gmail.com
    const password = req.headers.password; // 123456

    Admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }else{
            res.status(403).json({
                msg: "Admin doesn't exist"
            })
        }
    })


}

module.exports = adminMiddleware;