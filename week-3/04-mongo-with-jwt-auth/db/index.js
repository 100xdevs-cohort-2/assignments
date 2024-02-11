const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL);

const CourseSchema = new mongoose.Schema({
  // Schema definition here
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  imageLink: { type: String, required: true },
});
// Define schemas
const AdminSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  courses: { type: CourseSchema, required: false },
});

const UserSchema = new mongoose.Schema({
  // Schema definition here
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  purchasedCourses: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
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
