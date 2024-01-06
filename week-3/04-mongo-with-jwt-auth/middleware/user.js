function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
  const token = req.headers.token;
  const words = token.split(" ");
  const jwtToken = words[1];
  try {
    const decoded = jwt.verify(jwtToken, JWT_SECRET);
    if (decoded.username) next();
    else {
      res.status(403).json({
        msg: "You are not authenticated",
      });
    }
  } catch (err) {
    res.json({
      msg: "Incorrect inputs",
    });
  }
}

module.exports = userMiddleware;
