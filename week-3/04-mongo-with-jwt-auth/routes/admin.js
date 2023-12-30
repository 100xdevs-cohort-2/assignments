const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwtKey = "helloWorld";
const jwt = require("jsonwebtoken");
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const newAdmin = await new Admin({ username, password });
  newAdmin.save();
  res.status(201).json({ msg: "User Created Successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const findUser = await Admin.findOne({ username, password });
  if (findUser) {
    const token = jwt.sign({ username }, jwtKey);
    console.log(token);
    res.status(200).json({ token });
  } else {
    res.status(404).json({ msg: "Please check the admin details" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, price, description, imageLink } = req.body;
  const newCourse = await new Course({ title, price, description, imageLink });
  newCourse.save();
  res.status(201).json({ msg: "new course created" });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({ message: "All courses", courses: allCourses });
});

module.exports = router;
