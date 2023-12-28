const mongoose = require('mongoose');

const connectDB = (url) => {
  try {
    mongoose
      .connect(url)
      .then(() => console.log('Connection is set up with MongoDB'));
  } catch (error) {
    console.log({ error });
  }
};

module.exports = connectDB;
