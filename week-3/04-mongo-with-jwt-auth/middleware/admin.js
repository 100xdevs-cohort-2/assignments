const { Admin } = require("../db/index")
const jwt = require('jsonwebtoken')

// Middleware for handling auth
async function adminMiddleware(req, res, next) {

  const authHeader = req.headers["authorization"]
  if (!(authHeader.startsWith("Bearer"))) return res.status(401).json({ message: "UNAUTHORISED: Invalid Token" })
  const token = authHeader.split(" ")[1];
  await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async (err, decodedToken) => {
    if (err) return res.status(403).json({ message: "Forbidden: Access not allowed" })
    const adminExists = await Admin.findOne({ username: decodedToken.username }).exec()
    if (!adminExists) return res.status(403).json({ message: "Forbidden: Access not allowed" })
    req.user = decodedToken.username
    next()
  })
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = adminMiddleware;