const { connect } = require('mongoose');

const connectDB = (url) => {
  try {
    connect(url).then(() => console.log('Connection is set up with MongoDB'));
  } catch (error) {
    console.log({ error });
  }
};

module.exports = connectDB;
