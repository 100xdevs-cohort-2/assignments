const { response } = require('express');
const { User } = require('../db/index');

function userMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;

    User.findOne({
        username: username,
        password:password
    }).then((response) => {
        if (response) {
            next();
        } else {
            res.status(403).json({
                msg:"User not found"
            })
        }
            
    })
}

module.exports = userMiddleware;
