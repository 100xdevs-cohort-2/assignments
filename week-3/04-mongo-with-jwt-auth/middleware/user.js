function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  let token = req.headers.Authorization;
  try {
    jwt.verify(token, jwtPass);
    next();
  } catch (err) {
    res.send(new Error("Invalid auth token"));
  }
}

module.exports = userMiddleware;
