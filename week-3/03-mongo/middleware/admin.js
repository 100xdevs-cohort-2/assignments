// Middleware for handling auth
function adminMiddleware(Admin) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  return async (req, res, next) => {
    const username = req.headers.username;
    const password = req.headers.password;

    const admin = await Admin.findOne({ email: username, password: password });

    if (admin) {
      next();
    } else {
      res.status(404).send("Admin Not found");
    }
  };
}

module.exports = adminMiddleware;
