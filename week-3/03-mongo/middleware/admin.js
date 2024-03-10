const admin = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers['username']
    const existingAdmin = await admin.Admin.findOne({ username: username })
    if (!existingAdmin) {
        return res.status(404).send("No Entry")
    }
    next()
}

module.exports = adminMiddleware;