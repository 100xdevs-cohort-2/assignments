const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';

// Middleware for handling auth
function adminMiddleware(req, res, next) {
   const token=req.headers['authorization'];
    //  console.log(token)
   ans=jwt.verify(token,jwtPassword);
   ans? next() :res.status(404).json({msg:"not authorized"});
}

module.exports = adminMiddleware;