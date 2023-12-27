const {Admin} = require('../db/index');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const uname = req.headers.username;
    const passwd = req.headers.password;
    const AdminUser = await Admin.findOne({username:uname});

    if(AdminUser && AdminUser.password === passwd){
        req.Admin = AdminUser;
        next();
    }else{
        res.send({msg:"Username or Password are Wrong!!"});
    }
}

module.exports = adminMiddleware;