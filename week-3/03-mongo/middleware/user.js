const {User} = require("../db");
async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    
    const admin = await User.findOne({username: username}).exec();
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

module.exports = userMiddleware;