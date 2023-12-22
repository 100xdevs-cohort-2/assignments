const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index.js");
const jwt = require("jsonwebtoken");
const jwtPassword = "secretkey";
// User Routes
router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({
    username,
    password,
  });
  await newUser.save();
  res.send("New User Created!");
});

router.post("/signin", async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    if (!user) {
      res.send("User Not Registered!");
    }
    const token = jwt.sign({ username, password }, jwtPassword);
    res.json({
      token: token,
    });
  } catch (error) {
    res.send(error);
  }
});

router.get("/courses", async (req, res) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, jwtPassword);
    const allCourses = await Course.find();
    res.send(allCourses);
  } catch (error) {
    res.send(error);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  try {
    const id = req.params.courseId;
    const token = req.headers.authorization;
    const user = jwt.verify(token, jwtPassword);
    const course = await Course.findOne({ id });
    res.send("Course Purchased Successfully!");
  } catch (error) {
    res.send(error);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const token = req.headers.authorization;
    const user = jwt.verify(token, jwtPassword);
    const allCourses = await Course.find();
    res.send(allCourses);
  } catch (error) {
    res.send(error);
  }
});

module.exports = router;
