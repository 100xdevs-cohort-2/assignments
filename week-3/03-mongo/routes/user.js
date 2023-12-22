const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db/index.js");
const { Course } = require("../db/index.js");
// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username,
    password,
  });
  await newUser.save();
  res.send("User Created Successfully!!");
});

router.get("/courses", async (req, res) => {
  const allCourses = await Course.find();
  res.json(allCourses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const id = req.params.courseId;
  const course = await Course.findOne({ id });
  if (!course) {
    res.send("Course not available!");
  }
  res.send("Course purchased successfully!!");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const allCourses = await Course.find();
  res.send({ purchasedCourses: allCourses });
});
module.exports = router;
