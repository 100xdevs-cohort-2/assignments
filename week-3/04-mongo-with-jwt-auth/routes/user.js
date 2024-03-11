const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  // check for the username already exists
  await User.create({
    username: username,
    password: password,
  });
  res.status(200).json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check the creds
  const user = await User.findOne({ username: username, password: password });
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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({}).lean();
  res.status(200).json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  await User.updateOne(
    {
      username: req.username,
    },
    {
      $push: {
        purchasedCourse: courseId,
      },
    }
  );

  res.json({
    message: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.username });
  const purchasedCourses = user.purchasedCourse;
  const courses = await Course.find({
    _id: {
      $in: purchasedCourses,
    },
  });
  res.json({
    courses: courses,
  });
});

module.exports = router;
