const { Admin } = require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    const { username, password } = req.headers;

    const admin = await Admin.findOne({
        username: username,
        password: password
    })
    if (admin) {
        next();
    } else {
        res.status(403).json({
            msg: "Admin doesnt exist"
        })
    }
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;