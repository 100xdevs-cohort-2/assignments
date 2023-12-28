const { Admin } = require('../db');

async function adminMiddleware(req, res, next) {
  const { username, password } = req.headers;
  if (!username || !password)
    return res.status(400).json({ message: 'Invalid Credentials' });

  try {
    const resp = await Admin.findOne({ username, password });
    resp !== null
      ? next()
      : res.status(403).json({ message: 'You do not have access' });
  } catch (error) {
    console.log({ error });
  }
}

module.exports = adminMiddleware;
