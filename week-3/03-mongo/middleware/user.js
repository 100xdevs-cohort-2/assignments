const { User } = require('../db/index');

async function userMiddleware(req, res, next) {
  try {
    const user = await User.find({ username: req.headers.username });
    if (!user) {
      return res.status(404).json({
        status: 'fail',
        message: 'No user found with that ID'
      });
    }
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = userMiddleware;
