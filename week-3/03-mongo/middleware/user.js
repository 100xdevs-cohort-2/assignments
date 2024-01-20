const {User} = require('../db/index')
async function userMiddleware(req, res, next) {
    username = req.headers['username']
    password = req.headers['password']
   
    try{
        userInformation = await User.find({username: username})
        if(userInformation[0].password === password){
            next()
        }
        else{
            res.status(401).json({"message": "Authentication Failed"})
        }
    }
    catch(error){
        console.log(error)
        res.status(401).json({message: "Internal Server Error"})
    }
}

module.exports = userMiddleware;