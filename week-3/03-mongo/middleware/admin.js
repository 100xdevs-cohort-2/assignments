// Middleware for handling auth
import { Admin } from "../db"; //imports schema from admin in db
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

const username=req.headers.username //any username written in the link
const password=req.headers.password

const admin= await Admin.findOne({
    username:username,
    password:password
})
if(admin){
   await next()
}
else{
    res.status(403).json({
        msg:"Admin doesn't exist"
    })
}
}


module.exports = adminMiddleware;