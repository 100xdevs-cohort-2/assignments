const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    User.find({username: req.headers.username, password:req.headers.password})
        .then(function (user) {
            next();
        })
        .catch(function (err) {
            res.sendStatus(403)
        })
}

module.exports = userMiddleware;