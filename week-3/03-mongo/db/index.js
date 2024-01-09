const mongoose = require("mongoose");

// Connect to MongoDB

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://karthickbharathi15:NlFi7VbGyAW5Mdg1@cluster0.twe85bb.mongodb.net/"
    );
    console.log(`Connected to mongoDB ${conn.connection.host}`.bgMagenta.white);
  } catch (error) {
    console.log(`Error in MongoDb ${error}`.bgRed.white);
  }
};

// // Define schemas
// const AdminSchema = new mongoose.Schema({
//   // Schema definition here
//   username: String,
//   password: String,
// });

// const UserSchema = new mongoose.Schema({
//   // Schema definition here
//   username: String,
//   password: String,
// });

// const CourseSchema = new mongoose.Schema({
//   // Schema definition here
//   title: String,
//   description: String,
//   price: Number,
// });

// const Admin = mongoose.model("Admin", AdminSchema);
// const User = mongoose.model("User", UserSchema);
// const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  // Admin,
  // User,
  // Course,
  connectDb,
};
