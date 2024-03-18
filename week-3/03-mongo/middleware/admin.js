const { Admin } = require('../db/index')


// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    try{
        const foundUser = await Admin.findOne({
            username,
            password
        })
        if(foundUser) next();
        else{
            return res.status(404).json({
                msg : "Admin doesn't exists"
            })
        }
    }
    catch(e){
        console.log("error in admin middleware")
    }
}

module.exports = adminMiddleware;
