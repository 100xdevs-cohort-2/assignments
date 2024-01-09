function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;
  // Replace this with your actual authentication logic
  if (username === "username" && password === "password") {
    next();
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
}

module.exports = userMiddleware;
