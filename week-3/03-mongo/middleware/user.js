const { User } =require ( "../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    
    User.findOne({
        username:username,
        password:password
    })
    .then (function(value){  //if Admin exists then call  next function
       if(value){
        next();
       }else{ //if not then simply nreturn that the user doesnot exists
        res.status(403).json({
            msg:"Invalid User"
        })
       }
    })
}

module.exports = userMiddleware;

