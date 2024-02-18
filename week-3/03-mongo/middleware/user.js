const { User } = require("../db")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const user = req.headers.username
    const pass = req.headers.password
    try{
    const findUser = await User.findOne({username: user,password: pass})
    if(findUser){
        next()
    }else{
        res.send("Unauthorized")
    }
    }
    catch(error){
        res.status(401).json({error:"Internal Server Error "})
    }


}

module.exports = userMiddleware;