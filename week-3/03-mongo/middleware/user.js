const { User } = require('../db/index')

function userMiddleware(req, res, next) {

    const {username, password} = req.headers

    User.findOne( {
        username : username,
        password : password
    })
    .then ( value => {
        if(value){
            next()
        }
        else{
            res.status(403).json({'msg' : 'User not found'})
        }
    })
    
}

module.exports = userMiddleware;