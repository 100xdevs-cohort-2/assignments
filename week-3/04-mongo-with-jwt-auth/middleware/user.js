const jwt = require("jsonwebtoken")

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const { authorization } = req.headers;

    if(!authorization){
      return res.status(403).send("Unauthorized");
    }
    
    try {

      const token = authorization.split(" ")[1];
      
      if(!token && !token.startsWith("Bearer")){
        return res.status(403).send("Unauthorized");
      }
      
      const user = jwt.verify(token, "secret");
      req.user = {
        username: user.username,
        password: user.password,
      }
      next();

    } catch (error) {
      res.status(400).json({message: error.message});
    }

}

module.exports = userMiddleware;