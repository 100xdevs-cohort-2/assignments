const { Admin } = require('../db/index');

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
  try {
    const admin = await Admin.findOne({ username: req.headers.username });
    if (!admin) {
      return res.status(404).json({
        status: 'fail',
        message: 'No admin found with that ID'
      });
    }
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = adminMiddleware;
