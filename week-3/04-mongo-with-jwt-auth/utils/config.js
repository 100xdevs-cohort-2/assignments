require('dotenv').config();

const MONGODB_URI = process.env.MONGODB_URI;
const SECRET = process.env.JWT_SECRET;

module.exports = {
  MONGODB_URI,
  SECRET,
};
