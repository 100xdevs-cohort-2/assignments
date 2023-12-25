const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const app = express();
const mongoose = require("mongoose");
require("dotenv").config();

const uuid = require("uuid");
app.use(express.json());
const dbUrl = process.env.MONGODB_URL;
console.log(dbUrl);
mongoose.connect(dbUrl);

const Admin = mongoose.model("Admins", {
  email: String,
  password: String,
});

const Course = mongoose.model("Courses", {
  id: String,
  title: String,
  description: String,
  price: Number,
  imageLink: String,
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const userName = req.body.username;
  const password = req.body.password;
  const admin = new Admin({ email: userName, password: password });

  try {
    await admin.save();
    res.json({ message: "Admin created successfully" });
  } catch (err) {
    console.log(err);
    res.status(404).send("Admin not created");
  }
});

router.post("/courses", adminMiddleware(Admin), async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  const course = new Course({
    id: uuid.v4(),
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
  });

  try {
    await course.save();
    res.json({ message: "Course saved successfully", courseId: course.id });
  } catch (err) {
    console.log(err);
    res.json({ message: "Course not saved" });
  }
});

router.get("/courses", adminMiddleware(Admin), async (req, res) => {
  // Implement fetching all courses logic

  try {
    const courses = await Course.find({});
    res.json(courses);
  } catch (err) {
    console.log(err);
    res.json({ message: "Cannot fetch courses" });
  }
});

// app.listen(3000);

module.exports = { adminRouter: router, Course };
