const mongoose = require("mongoose");

const { Schema } = mongoose;
// Connect to MongoDB
mongoose.connect(
  "mongodb+srv://kushal:%231Kushal@harkiratassignment.rrdre65.mongodb.net/?retryWrites=true&w=majority&appName=harkiratAssignment"
);

// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
});

const UserSchema = new Schema({
  // Schema definition here
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  purchasedCourses: [{
    type : Schema.Types.ObjectId,
    ref:'Course'
  }]
});

const CourseSchema = new Schema({
  // Schema definition here
  title: { type: String, unique: true, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: String,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
