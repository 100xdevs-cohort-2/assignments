
const { Admin } = require('../db/index')

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const { username, password } = req.headers
    Admin.findOne({
        username:username,
        password:password,
        
    })
    .then( value =>{
        if(value){
            next()
        }
        else{
            res.status(403).json({
                'msg' : 'Admin does not exist'
            })
        }
    })


   
}

module.exports = adminMiddleware;