const { Admin } = require('../db/index')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    let auth_token =  req.headers.authorization;    
    try {
        let user = await Admin.findOne({auth_token: auth_token});
        // console.log("user", user)
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