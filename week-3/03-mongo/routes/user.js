const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  const { username, password } = req.headers;
  User.create({ username, password, purchasedCourses: [] });
  res.send("User signed up succesfully");
});

router.get("/courses", (req, res) => {
  const courses = Course.find({});
  res.send(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { username, password } = req.headers;
  const courseId = req.params.courseId;
  console.log(courseId, username, password);
  const course = await Course.findOne({
    _id: courseId,
  });
  const user = await User.findOne({ username: username, password: password });
  user.purchasedCourses.push(course);
  await User.updateOne({ username: username, password: password }, user);
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username, password } = req.headers;
  const user = await User.findOne({ username: username, password: password });
  console.log(user.purchasedCourses);
  res.json({
    purchasedCourses: user.purchasedCourses,
  });
});

module.exports = router;
