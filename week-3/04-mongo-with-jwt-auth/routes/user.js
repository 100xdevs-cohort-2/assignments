const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const zod = require("zod");

// User Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await User.findOne({ username: username });

  if (existingUser) {
    res.status(404).json({ msg: "User already exists" });
  }

  let newUser = await User.create({ username: username, password: password });

  if (newUser) {
    res.json({ msg: "User created successfully" });
  }
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await User.findOne({
    username: username,
    password: password,
  });

  try {
    if (existingUser) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(411).json({ msg: "Wrong Username or Password" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({}).lean();
  res.status(200).json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const isExistingCourse = await Course.findOne({ _id: courseId }).exec();
  if (!isExistingCourse) {
    return res.status(404).send({ message: "Course Not Found" });
  }
  try {
    await User.updateOne(
      { username: req.username },
      { $push: { purchasedCourses: courseId } },
      { new: true }
    );
    return res.status(200).send({ message: "Course purchased successfully" });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
