const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
require("dotenv").config();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.headers;
  const userFind = await Admin.where("username").equals(username);

  if (userFind.length !== 0) {
    res.send("Admin already exist");
    return;
  }
  const user = new Admin({ username: username, password: password });

  await user.save();
  res.send({ message: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.headers;
  const userExists = await Admin.findOne({
    username: username,
    password: password,
  });

  if (!userExists) {
    res.send("Admin doesn't exist in databse");
    return;
  } else {
    const token = jwt.sign(
      { username: username, password: password },
      process.env.SECRET
    );
    res.json({ token: token });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const newCourse = new Course({ ...req.body });
  await newCourse.save();
  const courseId = newCourse._id;

  res.json({
    message: "Course created successfully",
    courseId: courseId,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({ courses: courses });
});

module.exports = router;
