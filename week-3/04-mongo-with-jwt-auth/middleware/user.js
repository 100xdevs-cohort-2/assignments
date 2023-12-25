const jwt = require("jsonwebtoken");

function userMiddleware(User, jwtSecret) {
  return async (req, res, next) => {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const authHeader = req.headers.authorization;
    const [bearer, token] = authHeader.split(" ");

    if (bearer !== "Bearer" || !token) {
      res.status(401).json({ message: "Invalid auth header!" });
    }

    //verify token
    try {
      const decodedToken = jwt.verify(token, jwtSecret);
      req.decodedToken = decodedToken;
      next();
    } catch (err) {
      console.log(err);
      res.json({ Error: "Invalid token!" });
    }
  };
}

module.exports = userMiddleware;
