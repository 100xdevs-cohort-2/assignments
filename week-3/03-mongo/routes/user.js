const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

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

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.status(200).json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  await User.updateOne(
    {
      username: req.headers.username,
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
  const user = await User.findOne({ username: req.headers.username });
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
