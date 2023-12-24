// Middleware for handling auth
function adminMiddleware(req, res, next) {
  // Implement admin auth logic
  // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
  const UserName = Admin.findOne({ 'userName': req.headers.userName })
    .lean()
    .then(function (user) {
        if(!user.password == req.headers.password) {
            return next(new Error('Invalid Username or Password'));
        }
    });
  res.json("Admin Found");
  next();
}

module.exports = adminMiddleware;
