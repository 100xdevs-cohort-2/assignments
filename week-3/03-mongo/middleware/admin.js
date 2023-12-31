// Middleware for handling auth
const {Admin} = require("../db");
async function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    //check if the admin exists in the system
    const username = req.headers.username;
    const password = req.headers.password;
    
    const admin = await Admin.findOne({username: username}).exec();
    if(!admin) {
      res.status(401).send("Access denied!");
      return;
    } else if (admin) {
      if(password != admin.password) {
        res.status(401).send("Access denied!");
        return;
      }
    }
    next()
}

module.exports = adminMiddleware;