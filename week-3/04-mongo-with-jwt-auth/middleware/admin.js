const jwt = require('jsonwebtoken');
const JWT_SECRET = '123445666';
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the
    // admin from the admin DB. Check readme for the exact 
    // headers to be expected

    const authHead= req.headers.authorization;
    console.log(authHead);
    const jwt_token= authHead.split(" ")[1];
    console.log(jwt_token);
    console.log(JWT_SECRET);
    try{
        console.log("start1");
        const decode = jwt.verify(jwt_token,JWT_SECRET);
        console.log("check");
        console.log(decode);
        if(decode.username){
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

    // const kt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwiaWF0IjoxNzA0OTYwOTA5fQ.Ur5xbSDw8IVAIgy6xlQC0Mp5dmocR3PJqhUvQza8tnA";
    // console.log(kt);
    // console.log(jwt_token);
    // const checking=kt==jwt_token;
    // console.log(checking);
    // try{
    //     console.log("start1");
    //     const token = jwt.verify(jwt_token,JWT_SECRET);
    //     console.log(token);
    //     console.log("check");
    //     //console.log(decode);
    //     if(token.username){
    //         console.log("check11");
    //         next();
    //     }else {
    //         res.status(403).json({
    //             message: "Not authenticated"
    //         })
    //     }
    // }catch(e){
    //     res.json({
    //         message: "Incorrect inputs"
    //     })
    // }
    
}

module.exports = adminMiddleware;