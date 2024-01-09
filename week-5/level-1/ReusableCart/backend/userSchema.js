const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  interest: {
    type: String,
    required: true,
  },
  github: {
    type: String,
    required: true,
  },
  linkdin: {
    type: String,
    required: true,
  },
  twitter: {
    type: String,
    required: true,
  },
});
const User = mongoose.model('User', userSchema);
module.exports = User;
