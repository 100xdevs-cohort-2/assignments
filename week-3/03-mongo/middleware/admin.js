//import admin model from mongoDB folder
const {Admin} = require("../db");



// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    //take username and password from the header
    const username= req.headers.username;
    const password= req.headers.password;

    //check if the username entered in the header is present in the admin
    Admin.findOne({
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
                msg: "Admin user doesn't exists"
            })
        }
    })


}

module.exports = adminMiddleware;