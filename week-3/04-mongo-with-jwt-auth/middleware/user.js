
const jwt = require('jsonwebtoken');
const JWT_SECRET = '123445666'; 


function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    //Check readme for the exact headers to be expected

    
    const authHead= req.headers.authorization;
    const jwt_token= authHead.split(" ")[1];
    console.log(jwt_token);

    try{
        console.log("check1");
        const decode= jwt.verify(jwt_token,JWT_SECRET);
        console.log(decode.username);
        if(decode.username){
            // console.log("check3");
            req.username = decode.username;
            // console.log("authencated ");
            // console.log(decode);
            next();
        }else {
            res.status(403).json({
                message: "Not authenticated"
            })
        }
    }catch(e){
        res.json({
            message: "Incorrect inputs"
        })
    }

    console.log("------------------");
}

module.exports = userMiddleware;