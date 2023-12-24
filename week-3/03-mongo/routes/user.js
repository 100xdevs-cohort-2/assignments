const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const [username, password] = [req.body.username, req.body.password];

  const existingUser = await User.findOne({ username: username });

  if (existingUser) return res.send(400, { message: "User Already Exists" });

  const newUser = new User({
    username: username,
    password: password,
  });

  try {
    const savedUser = newUser.save();
    res.send(201, { message: "User created successfully" });
  } catch (e) {
    res.send(503, { message: "Something went wrong" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.send(200, { courses: courses });
  } catch (e) {
    res.send(503, { message: "Something went wrong" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const user = await User.findOne({ username: req.headers.username });
  const course = await Course.findOne({ _id: req.params.courseId });
  user.purchasedCourses.push(course);
  user.save();
  res.send(200, { message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username });
  res.send(200, { purchasedCourses: user.purchasedCourses });
});

module.exports = router;
