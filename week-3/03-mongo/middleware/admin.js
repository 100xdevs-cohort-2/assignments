// Middleware for handling auth
const {Admin}= require("../db/index");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username=req.headers.username;
    const password=req.headers.password;

    try{
        const user= await Admin.findOne({username,password});

        if(user){
            next();
        }
        else{
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }
    }
    catch(err){
        res.status(500).send("Internal server error");
    }
    
}

module.exports = adminMiddleware;