// Middleware for handling auth
const {Admin} = require("../db/index")

async function adminMiddleware(req, res, next) {
    const username = req.headers.username;
    const password = req.headers.password;
  
    try {
      const admin = await Admin.findOne({ username: username, password: password });
  
      if (admin) {
       next()
      } else {
       res.json({
        mag:"wrong credentials!!!"
       })
      }
    } catch (error) {
      console.error("Error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

module.exports = adminMiddleware;