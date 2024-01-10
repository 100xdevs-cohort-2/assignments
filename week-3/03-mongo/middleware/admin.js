// Middleware for handling auth
const collectionsOb = require("../db/index");
const mongoose = require("mongoose"); 
const Admin = collectionsOb.Admin; 

// Checks if the given admin is present in the mongoDb
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username; 
    const password = req.headers.password; 
    if(await Admin.findOne({username,password}))
    {
        // return res.status(403).send("Wrong Credentials"); 
        next(); 
        return ;
    } 
 return res.status(403).send("Wrong credentials");    
                                       
}

module.exports = adminMiddleware;