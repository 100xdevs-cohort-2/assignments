const mongoose = require("mongoose");

// Connect to MongoDB
mongoose.connect("your-mongodb-url");

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  name: { type: String, default: "Annonymous" },
  email: { type: String, match: /[/\S+@\S+\.\S+/]/ },
  password: { type: String },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  name: { type: String, default: "Annonymous" },
  age: { type: Number, min: 18, index: true },
  bio: { type: String, match: /[a-zA-Z ]/ },
  date: { type: Date, default: Date.now },
});

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  department: { type: String },
  category: { type: String },
  subject: { type: String },
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
