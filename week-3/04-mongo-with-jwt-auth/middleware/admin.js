// Middleware for handling auth

const {Admin} = require("../db");
const jwtPassword = "givemeahayiaahhaann123@@";
const jwt = require("jsonwebtoken");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const token = req.headers.Authorization.split(' ')[1];
    jwt.verify(token,jwtPassword,async function(err,decoded){
        if(err){
            res.status(500).json({message:"Something is wrong with token"});
        }else{
            const user_name = decoded.username;
            const pass_word = decoded.password;

            const response = await Admin.findOne({
                username:user_name,
                password:pass_word
            })

            if(response){
                next();
            }else{
                res.status(403).json({message:"Invalid Access"});
            }
        }
    });



}

module.exports = adminMiddleware;