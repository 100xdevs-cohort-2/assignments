const jwt = require('jsonwebtoken');
require('dotenv').config()

function userMiddleware(req, res, next) {
  let token = req.headers.authorization;
  try{
      jwt.verify(token, process.env.jwtPassword);
      next();
    } catch (err){
      res.status(404).json({
          message: "Invalid token"
      })
    }
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;