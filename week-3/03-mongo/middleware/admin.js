// Middleware for handling auth
const {Admin} = require('../db/index')

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    let admin = await Admin.findOne({username: username}).select('username password');

    if(admin === undefined || admin.password !== password)
    {
        return res.status(401).json({msg: "Please enter the correct credentials."});
    }

    next();
}

module.exports = adminMiddleware;