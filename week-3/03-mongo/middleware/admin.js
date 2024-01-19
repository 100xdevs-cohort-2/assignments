const { Admin }  =require("../db/index");
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

    const username = req.headers.username;              //yaha par headers kyu hai , body kyu nahi (jabki routes me to body me data aa raha) => kyuki hm yaha pr username and password headers me bhej rahe aur baki courses info body me+
    const password = req.headers.password;

    Admin.findOne({
        username: username,
        password: password
    })
    .then((value)=>{
        if(value)
        {
            next()
        }
        else{
            res.status(403).json({
                msg:"Admin not exist"
            })
        }
    })
}

module.exports = adminMiddleware;