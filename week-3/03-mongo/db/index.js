const mongoose = require("mongoose");
const { link } = require("../routes/admin");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://admin:Pranav%40123@cluster0.lwi2abw.mongodb.net/newuserdata2"
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
  // id: Number,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  // published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
