const jwt = require('jsonwebtoken')
const {User} = require("../db/index")

const jwtPassword = 'secret';

async function userMiddleware(req, res, next) {
    try{
        const token = req.headers['authorization'].split(' ')[1];
        const decoded = jwt.verify(token,jwtPassword);
        const username = decoded.username;
        
        const results= await User.find({
            username: username,
        })
        if(!results.length){
            return res.status(403).send("Incorrect credentials");
        }
        next();
    }
    catch(error){
        return res.status(500).send("Invalid token")
    }
    
}

module.exports = userMiddleware;