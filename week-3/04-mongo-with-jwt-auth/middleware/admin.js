const jwt = require('jsonwebtoken');
const Admin = require('../models/admin');
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, 'secret');
    const username = decoded.username;
    Admin.findOne({ username: username }, (err, admin) => {
        if (err) {
            console.log(err);
        } else if (!admin) {
            res.status(400).send("Admin not found");
        } else {
            next();
        }
    });
}

module.exports = adminMiddleware;