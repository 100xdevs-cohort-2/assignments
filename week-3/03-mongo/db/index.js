const mongoose = require("mongoose");

async function connectToMongoDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://sk1309:100xdevs@100xdevs.hrhpudx.mongodb.net/test"
    );

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
  }
}

// Call the connectToMongoDB function to establish the connection
connectToMongoDB();

// Define schemas
const AdminSchema = new mongoose.Schema({
  userName: String,
  password: String,
});

const UserSchema = new mongoose.Schema({
  userName: String,
  password: String,
  purchasedCourses: [
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
  imageLink: String,
  published: Boolean,
});

// Define models
const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

// Export models if needed
module.exports = {
  Admin,
  User,
  Course,
};
