const { Admin } = require("../db");

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    Admin.find({username: req.headers.username, password:req.headers.password})
        .then(function (admin) {
            next();
        })
        .catch(function (err) {
            res.sendStatus(403)
        })
}

module.exports = adminMiddleware;