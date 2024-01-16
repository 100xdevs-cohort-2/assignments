const { text } = require("express");
const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("your-mongodb-url");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: String,
    required: true,
  },
  course: [
    {
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    unique: true,
  },
  coursebought: [
    {
      type: Schema.Types.ObjectId,
      required: true,
    },
  ],
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
