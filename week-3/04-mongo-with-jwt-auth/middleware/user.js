 const jwt = require('jsonwebtoken')
 const secretpass = "secret"

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.authorization

    const decode = jwt.verify(token, secretpass)

    if(decode){
        next()
    }
    else{
        res.status(404).send("bad authentication")
    }
}

module.exports = userMiddleware;