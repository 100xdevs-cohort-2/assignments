const mongoose = require("mongoose");
// Connect to MongoDB
const connection = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://sk1309:100xdevs@100xdevs.hrhpudx.mongodb.net/user"
    );
    console.log("connected to database");
  } catch (err) {
    console.log(err);
  }
};
connection();

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
  title: String,
  description: String,
  price: Number,
  imageLink: String,
  published: Boolean,
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

module.exports = {
  Admin,
  User,
  Course,
};
