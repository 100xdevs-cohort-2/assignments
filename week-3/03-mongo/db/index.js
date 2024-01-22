const { text } = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://anubhavbaranwal02:Anubhav08@cluster0.6e8d182.mongodb.net/"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    // required: true,
  },
  course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  
  password: { type: String },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  coursebought: [
    {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    unique: true,
    trim: true,
  },
  ImageLink: {
    type: String,
  },
  price: {
    type: Number,
  },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
