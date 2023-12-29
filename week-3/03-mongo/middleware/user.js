function userMiddleware(User) {
  return async (req, res, next) => {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected
    const username = req.headers.username;
    const password = req.headers.password;

    const findUser = await User.findOne({
      email: username,
      password: password,
    });

    if (findUser) {
      req.user = findUser;
      next();
    } else {
      res.json({ message: "Cannot find user" });
    }
  };
}

module.exports = userMiddleware;
