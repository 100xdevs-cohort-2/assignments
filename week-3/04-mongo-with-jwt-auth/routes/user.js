const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwtKey = "helloWorld";
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const newUser = await new User({ username, password });
  newUser.save();
  res.status(201).json({ msg: "user created" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.headers.username;
  const password = req.headers.password;
  const findUser = await User.findOne({ username, password });
  if (findUser) {
    const token = jwt.sign({ username }, jwtKey);
    res.status(200).json({ message: "token", token });
  } else {
    res.status(404).json({ msg: "user not found" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const allCourses = await Course.find({});
  res.status(200).json({ message: "All courses", courses: allCourses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = req.headers.username;
  const coursesId = req.params.courseId;
  const newCourseAdd = await User.updateOne(
    { username },
    { $push: { purchasedCourse: coursesId } }
  );
  res.status(200).json({ msg: "added new course" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const userCourses = await User.findOne({ username });
  res.status(200).json({
    msg: "here are the purchased courses",
    courses: userCourses.purchasedCourse,
  });
});

module.exports = router;
