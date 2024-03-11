const models=require("../db/index");
// Middleware for handling auth
  function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username=req.headers.username;
    const password=req.headers.password;
        models.Admin.findOne({
            username,
            password
        }).then((admin)=>{
            if(!admin){
                res.sendStatus(401);
            }
            else{
                next();
            }
        });  

}

module.exports = adminMiddleware;