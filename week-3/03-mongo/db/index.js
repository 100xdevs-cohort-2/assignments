const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  // mongodb+srv://username:password@cluster.<...>.mongodb.net/db_name?OPTIONS
  "mongodb+srv://pvn:pavan@cluster0.gxxfv.mongodb.net/user_app?retryWrites=true&w=majority&appName=Cluster0"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  coursesPurchased: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  title: String,
  description: String,
  price: Number,
  imgURL: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
