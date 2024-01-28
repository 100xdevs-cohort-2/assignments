const { Admin } = require("../db")

// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    const username = req.headers.username;
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    }).then((user) => {
        if (user) {
            next()
        }
        else {
            res.status(403).json({
                msg: "Admin does not exits"
            })
        }
    })
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;