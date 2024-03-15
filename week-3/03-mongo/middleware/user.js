
const {User} = require("../db");
function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
//take username and password from the header
const username= req.headers.username;
const password= req.headers.password;

//check if the username entered in the header is present in the admin
User.findOne({
    username: username,
    password: password
})
//if the user is in the DB then
.then(function (value){
    if(value){
        next(); ///this "next" means to proceed with the next process in the flow

    }else{
    //if the user is not present in the admin dB
        res.status(403).json({
            msg: " User doesn't exists"
        })
    }
})



}

module.exports = userMiddleware;