const mongoose = require("mongoose");

// Connect to MongoDB
mongoose
  .connect(
    "mongodb+srv://root:root@100xdev.kmbpv1b.mongodb.net/week-3?retryWrites=true&w=majority"
  )
  .then(() => console.log("DB connected"));

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here

  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here

  title: String,
  description: String,
  price: Number,
  image: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
