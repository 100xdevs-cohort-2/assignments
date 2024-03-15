const{Admin} =  require("../db");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    // 
    
    const{username, password} = req.headers;

    const adminAuth = await Admin.findOne({username : username , password : password});
    if(adminAuth){
        // console.log("in next if")
        next();
    }else{
        res.send("No use found with these Id");
    }

}

module.exports = adminMiddleware;