// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

  let username = req.headers.username;
  let password = req.headers.password;

  if (username === "hashir" && password === "password") {
    next();
  } else {
    return res.status(404).json({ msg: "Not authenticated" });
  }
}

module.exports = adminMiddleware;
