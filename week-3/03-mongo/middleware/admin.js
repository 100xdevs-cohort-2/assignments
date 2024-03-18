const db = require("../db/index");
const adminModel = db.Admin;
// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    try{
        const username = req.headers.username;
        const password = req.headers.password;
        const user = await adminModel.findOne({username, password});
        if (user){
            console.log("Admin verifed.");
            next();
        }
    }
    catch(err){
        res.status(500).json({error: err});
    }
}

module.exports = adminMiddleware;