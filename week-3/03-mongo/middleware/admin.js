// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB.
  // Check readme for the exact headers to be expected
  // Input: Headers: { 'username': 'username', 'password': 'password' },

  const username = req.headers.username;
  const password = req.headers.password;

  //check mongoDB admin username/pwd
  if (username === "admin" && password === "password") {
    res.status(200).send("admin authenticated");
    next();
  }
}

module.exports = adminMiddleware;
