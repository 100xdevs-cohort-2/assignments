// Middleware for handling auth
const {Admin} = require("../db");

async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const user_name = req.headers.username;
    const pass_word = req.headers.password;

    const resposne = await Admin.findOne({
        username:user_name,
        password:pass_word
    })

    if(response){
        next();
    }
    
    res.status(403).json({msg:"Invalid Admin creds"});
}

module.exports = adminMiddleware;