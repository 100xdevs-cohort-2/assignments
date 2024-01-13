const mongoose = require("mongoose");

// Connect to MongoDB
// mongoose.connect("mongodb+srv://priyankasati:12345@course-selling.d3psoi0.mongodb.net/");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to MongoDB successfully");
  } catch (error) {
    console.log("error while connecting DB : ", error);
    process.exit(1);
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
//   purchasedCourses: [
//     {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: "Course",
//     },
//   ],
// });

// const CourseSchema = new mongoose.Schema({
//   // Schema definition here
//   title: String,
//   description: String,
//   price: Number,
//   imageLink: String,
// });

// const Admin = mongoose.model("Admin", AdminSchema);
// const User = mongoose.model("User", UserSchema);
// const Course = mongoose.model("Course", CourseSchema);

// module.exports = {
//   Admin,
//   User,
//   Course,
//   connectDB
// };





module.exports = { connectDB };
