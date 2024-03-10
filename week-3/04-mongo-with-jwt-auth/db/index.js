const mongoose = require("mongoose");
require("dotenv").config();

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/assignment3_4")
  .then(() => console.log("db connected successfully"));

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const PurchasedCourse = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
  purchased: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);
const PurchasedCourses = mongoose.model("Purchased Courses", PurchasedCourse);

module.exports = {
  Admin,
  User,
  Course,
  PurchasedCourses,
};
