const jwt = require("jsonwebtoken");

function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    if (err) {
      next(err)
      return res.sendStatus(403)
    }
    req.user = user
    next()
  })
}

module.exports = {
  authenticateToken
}