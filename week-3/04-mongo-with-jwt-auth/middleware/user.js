const {User} = require("../db");
const jwtPassword = "givemeahayiaahhaann123@@";
const jwt = require("jsonwebtoken");


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const token = req.headers.Authorization.split(' ')[1];
    jwt.verify(token,jwtPassword,async function(err,decoded){
        if(err){
            res.status(500).json({message:"Something is wrong with token"});
        }else{
            const user_name = decoded.username;
            const pass_word = decoded.password;

            const response = await User.findOne({
                username:user_name,
                password:pass_word
            })

            if(response){
                req.username=user_name;
                next();
            }else{
                res.status(403).json({message:"Invalid Access"});
            }
        }
    });
}

module.exports = userMiddleware;