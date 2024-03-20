const collectionsOb = require("../db/index"); 
const User = collectionsOb.User; 

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username; 
    const password = req.headers.password; 
    if(await User.findOne({username,password}))
    {
        next(); 
        return; 
    }
    return res.status(403).send("Wrong credentials"); 
}

module.exports = userMiddleware;