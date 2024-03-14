const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const token = req.headers.authorization;
  const words = token.split(" ");
  const jwtToken = words[1];

  // To Check if the token is provided
  if (!jwtToken) {
    return res
      .status(401)
      .json({ message: "Unauthorized - Token not provided" });
  }
  try {
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
    console.log(decodedValue.username);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      //   req.randomData = "Adsadsadsadssd";
      next();
    } else {
      console.log(decodedValue.username);
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (error) {
    res.status(401).json({ message: "Unauthorized - Invalid token" });
  }
}

module.exports = userMiddleware;
