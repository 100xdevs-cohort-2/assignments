const { connect } = require('mongoose');

const connectDB = async (url) => {
  try {
    await connect(url);
    console.log('Connection is set up with MongoDB');
  } catch (error) {
    console.log({ error });
  }
};

module.exports = connectDB;
