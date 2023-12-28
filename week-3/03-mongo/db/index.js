const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ahdkabeerpi:hdkbeerPI99@cluster0.50y1mee.mongodb.net/?retryWrites=true&w=majority"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  course: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  name: String,
  purchasedCourses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
  mongoose,
};
