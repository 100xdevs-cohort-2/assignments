const jwt = require("jsonwebtoken");
const jwtUserSecret = "User";

function userMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  const [bearer, actualToken] = authToken.split(" ");

  try {
    const authorizedUser = jwt.verify(actualToken, jwtUserSecret);
    if (authorizedUser) {
      //sending the username in the request object.
      const decodedToken = jwt.decode(actualToken);
      req.username = decodedToken.username;

      res.status(200);
      next();
    }
  } catch (error) {
    res
      .status(404)
      .json({ error: "Bhaiya ji valid token dedete toh badhiya rehta!" });
  }
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
}

module.exports = userMiddleware;
