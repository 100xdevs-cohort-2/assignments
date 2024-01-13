const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://ameeetgaikwad:asdf@cluster0.wwdsqu0.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  coursePublished: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String, unique: true },
  password: String,
  coursePurchased: [{ type: mongoose.SchemaTypes.ObjectId, ref: "Course" }],
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
};
