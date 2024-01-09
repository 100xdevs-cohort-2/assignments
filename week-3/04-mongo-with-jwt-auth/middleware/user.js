const jwt = require('jsonwebtoken');
const environment = require('../utils/constants');

function userMiddleware(req, res, next) {
  const accessToken = req.headers.authorization?.split(' ')[1];

  try {
    const decodedValue = jwt.verify(accessToken, environment.JWT_SECRET);
    if (decodedValue.username) {
      req.username = decodedValue.username;
      next();
    } else {
      res.status(403).json({ message: 'The AccessToken provided is Invalid' });
    }
  } catch (error) {
    res.status(403).json({ message: 'Incorrect inputs' });
  }
}

module.exports = userMiddleware;
