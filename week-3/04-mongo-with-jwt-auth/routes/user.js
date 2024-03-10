const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtpassword = "secretpassword#123";

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = new User({
    username,
    password,
  });

  await user.save();
  res.status(200).json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({ username, password });
  if (!user) {
    return res.status(403).json({ message: "User not found" });
  }
  const token = jwt.sign(username, jwtpassword);
  res.status(200).json({
    message: "Login success",
    token,
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.status(200).json(courses);
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const course = Course.findOne({ _id: courseId });
  if (!course) {
    return res.status(403).json({ message: "Course Not Found" });
  }

  await User.updateOne(
    { username },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username });
  const courseIds = user.purchasedCourse;

  const purchasedCourses = await Course.find({
    _id: {
      $in: courseIds,
    },
  });

  res.status(200).json(purchasedCourses);
});

module.exports = router;
