const { User } = require("../db")

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const username = req.headers.username
  const password = req.headers.password
  
  User.findOne({
    username,
    password
  }).then((value) => {
      if (userExists) {
        next()
      } else {
        res.status(403).json({
          msg: "User doesn't Exist"
        })
      }
    })

}

module.exports = userMiddleware;
