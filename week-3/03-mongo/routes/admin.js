const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const newAdmin = await new Admin({ username, password });
  const admin1 = newAdmin.save();
  return res.status(201).json({ msg: "created new Admin" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;

  const newCourse = await new Course({ title, description, price, imageLink });
  newCourse.save();
  res.status(201).json({ msg: "course created successfully" });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const allCourses = await Course.find({});
  return res.status(200).json({ msg: "All courses", courses: allCourses });
});

module.exports = router;
