const models=require("../db/index")
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
    models.User.findOne({
        username,
        password
    }).then((user)=>{
        if(!user){
            res.sendStatus(401);
        }
        else{
            next();
        }
    });  
}

module.exports = userMiddleware;