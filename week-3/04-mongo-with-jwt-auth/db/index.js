const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://rgoyal4122:7699865455%40Rg@cluster0.rbdyknl.mongodb.net/CourseSell"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  id: Number,
  title: String,
  description: String,
  price: Number,
  image: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: String,
  password: String,
  purchasedCourses: [
    {
      id: Number,
      title: String,
      description: String,
      price: Number,
      image: String,
    },
  ],
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
