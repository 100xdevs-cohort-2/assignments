const {Admin} = require('../db/index');
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const data = await Admin.find({
        username,
        password
    });
    if (data) {
        next();
    }
    else {
        res.status(403).json({message: 'Admin does not exist'});
    }
}

module.exports = adminMiddleware;