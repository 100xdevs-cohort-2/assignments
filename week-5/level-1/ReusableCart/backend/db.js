const mongoose = require('mongoose');
DB_NAME = 'reusableCard';

mongoose.connect(`mongodb://localhost:27017/${DB_NAME}`);
const db = mongoose.connection;
db.on('connected', () => {
  console.log(`connected on mongodb://localhost:27017/${DB_NAME}`);
});
db.on('error', (err) => {
  console.log(`db connection error ${err}`);
});
module.exports = db;
