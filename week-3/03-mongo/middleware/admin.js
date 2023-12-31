// Middleware for handling auth

const AdminSchema = require('../db/index')
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const userName = req.headers.username
    const Password = req.headers.password

    const ifexist = AdminSchema.findOne({username: userName, password: Password})

    if(ifexist){
        next()
    }
    else{
        res.status(404).send("You need to first signup")
    }
}



module.exports = adminMiddleware;