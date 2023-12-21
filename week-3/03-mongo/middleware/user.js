const { User } = require("../db");

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const { username, password} = req.headers;

    if(!(username && password)){
        return res.status(403).send("Unauthorized");
    }

    try {
      const user = await User.findOne({username, password});
      if(!user){
        return res.status(403).send("Unauthorized");
      }
      next();
    } catch (error) {
        res.status(400).json({message: error.message});
    }

}

module.exports = userMiddleware;