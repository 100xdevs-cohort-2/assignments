const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.json({
    message: "User created successfully",
  });
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => {
    res.json(courses);
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router;
