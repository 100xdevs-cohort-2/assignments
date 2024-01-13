const { Admin } = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let username =  req.headers.username;
    let password =  req.headers.password;

    try {
        let user = await Admin.findOne({username: username, password: password});
        if(!user) {
            res.status(404).json({ message : "User Not Found"});
            return;
        }
        next();
    } catch(err) {
        res.status(500).json({ message : "Internal Server Error"});
    }
}

module.exports = adminMiddleware;