const { Admin } = require("../db");
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    const admin = await Admin.find({ adminUsername: username, adminPassword: password });
    console.log(admin);

    if (!admin) {
        return res.status(403).send('Admin not exist in the db');
    }
    next(); 
}

module.exports = adminMiddleware;