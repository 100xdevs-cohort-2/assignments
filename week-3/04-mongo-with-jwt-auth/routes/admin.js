const express = require("express");
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const uuid = require("uuid");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
require("dotenv").config();

const app = express();
const router = Router();

app.use(express.json());
const dbUrl = process.env.MONGODB_URL;
const jwtSecret = process.env.JWT_SECRET;

mongoose.connect(dbUrl);

//models
const Admin = mongoose.model("Admins", { email: String, password: String });
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
  const username = req.body.username;
  const password = req.body.password;

  //check if admin exists
  try {
    const findAdmin = await Admin.findOne({
      email: username,
      password: password,
    });

    if (findAdmin) {
      res.json({ message: "Admin already exists" });
    } else {
      const admin = new Admin({ email: username, password: password });

      //save admin to db
      try {
        await admin.save();
        res.json({ message: "admin created successfully" });
      } catch (err) {
        console.log("Cannot create admin");
      }
    }
  } catch (err) {
    console.log(err);
    res.send("Cannot find admin");
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  //check if admin exists in db
  try {
    const admin = await Admin.findOne({ email: username, password: password });

    if (admin) {
      const token = jwt.sign(
        { username: password, password: password },
        jwtSecret
      );
      res.json({ message: "Admin signed in", token: token });
    } else {
      res.json({ message: "Admin not found" });
    }
  } catch (err) {
    console.log(err);
    res.send("Error finding admins");
  }
});

router.post("/courses", adminMiddleware(Admin, jwtSecret), async (req, res) => {
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
    res.json({
      message: "Course created successfully",
      courseId: course.id,
    });
  } catch (err) {
    console.log(err);
    res.json({ Error: "Cannot save course" });
  }
});

router.get("/courses", adminMiddleware(Admin, jwtSecret), async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.json(allCourses);
});

module.exports = { adminRouter: router, Course };
