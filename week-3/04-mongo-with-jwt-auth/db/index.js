const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:admin@cluster0.7eqdnj7.mongodb.net/courses_newApp"
);

/// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  adminName: String,
  adminPassword: String,
  /* ->*/ adminCourses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  ],
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  /* ->*/ purchasedCourses: [
    { type: mongoose.Schema.Types.ObjectId, ref: "Course" },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  /* ->*/ published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
