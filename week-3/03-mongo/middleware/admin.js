const {Admin} = require ("../db");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
   const username=req.headers.username;
   const password=req.headers.password;

   Admin.findOne({
    username:username,
    password:password
   }).then (function(value){
        if(value){//if Admin exists then call  next function
            next();
        }else{ //if not then simply nreturn that the user doesnot exists
            res.statua(403).json({
                msg:"admin does not exits"
            })
        }
   })

}

module.exports = adminMiddleware;