const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  User.create({
    username,
    password,
  });
  res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne(
    { username },
    {
      $push: { purchasedCourses: courseId },
    }
  ).catch((e) => {
    console.log(e);
  });
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.headers;
  const currentUser = await User.findOne({ username });
  const purchasedCourses = await Course.find({
    _id: {
      $in: currentUser.purchasedCourses,
    },
  });
  res.json({ courses: purchasedCourses });
});

module.exports = router;
