const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:XTWDxiA0WWBVMRbT@cluster0.alwsq6z.mongodb.net/CourseSeling"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});
const Admin = mongoose.model("Admin", AdminSchema);

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});
const Course = mongoose.model("Course", CourseSchema);

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  purchasedCourses: [
    {
      title: String,
      description: String,
      price: Number,
      imageLink: String,
    },
  ],
});
const User = mongoose.model("User", UserSchema);

module.exports = {
  Admin,
  User,
  Course,
};
