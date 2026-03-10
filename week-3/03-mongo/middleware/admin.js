const {Admin} = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username, password} = req.headers;

    const admin = await Admin.findOne({
        username,
        password
    })

    if (!admin) {
        return res.status(404).json({
            msg: "Admin doesn't exist!"
        })
    }

    next();
}

module.exports = adminMiddleware;