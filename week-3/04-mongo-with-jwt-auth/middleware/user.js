const User = require("../db/index.js");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers['Authorization'];
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.json({
            mesdage : "Please login",
        })
    }
    const token = authHeader.split(' ')[1];
    if(!token){
        return res.json({
            message : 'Token is not required',
        });
    };
    try {
        const JWT_TOKEN = "ROHAN"
        const decoded = jwt.verify(token,JWT_TOKEN);
        const user = await User
        if(!user){
            return res.json({
                message : "Invalid token",
            })
        }
        req.user = user;
    } catch (error) {
        return res.json({
            message : "Unauthenticated"
        });
    }
}

module.exports = userMiddleware;