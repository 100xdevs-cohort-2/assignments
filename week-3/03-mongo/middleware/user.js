async function userNotExists(req,res,next) {
    const username = req.body.username;
    const password = req.body.password;
    let userExists = await User.findOne({ username: username , password : password});
    if (userExists) {
      return res.status(400).json({
        message: "user aldready exists",
      });
    }
    next();
  }

async function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;
    let userExists = await User.findOne({
        username,
        password,
      });
      if (!userExists) {
        return res.status(403).json({
          msg: "user doesn't exist",
        });
      }
      next();
}

module.exports = userMiddleware,userNotExists;

