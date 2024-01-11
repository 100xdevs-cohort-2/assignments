const {Admin}  = require('../db/index')
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const {username,password} = req.headers;
    // console.log(username);
    // console.log(password);
    const user = await Admin.findOne({
        username,password
    })
    if(user){
        next();
    }
    else{
        return res.status(404).send('Admin not found');
    }
}

module.exports = adminMiddleware;