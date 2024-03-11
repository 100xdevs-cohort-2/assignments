const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  // check for the username already exists
  await Admin.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    message: "Admin Successfully created!",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check the creds
  const user = await Admin.findOne({ username: username, password: password });
  if (user) {
    const token = await jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({
      token,
    });
  } else {
    res.status(411).json({
      message: "Incorrect credentials!",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  res.status(200).json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({}).lean();
  res.status(200).json({
    courses,
  });
});

module.exports = router;
