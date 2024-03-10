const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://disco:disco@cluster0.azxzisu.mongodb.net/courses_app"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: Number,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const adminModel = mongoose.model("Admin", AdminSchema);
const userModel = mongoose.model("User", UserSchema);
const courseModel = mongoose.model("Course", CourseSchema);

module.exports = {
  adminModel,
  userModel,
  courseModel,
};
