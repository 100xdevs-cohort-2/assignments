const mongoose = require("mongoose");

// Connect to MongoDB

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("error while connecting DB : ", error);
    process.exit(1);
  }
};

module.exports = { connectDB };
