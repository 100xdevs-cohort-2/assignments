const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUSer = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUSer) {
    res.status(404).json({ msg: "Username already exists" });
  }

  const admin = new Admin({
    username: username,
    password: password,
  });

  admin.save();

  res.status(200).json({ msg: "Admin created !!" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUSer = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUSer) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({
      token: token,
    });
  }

  res.status(404).json({
    msg: "User not found",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // zod
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json({
    courses: courses,
  });
});

module.exports = router;
