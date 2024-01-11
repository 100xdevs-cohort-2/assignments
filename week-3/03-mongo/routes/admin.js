const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.headers;
  const userFind = await Admin.where("username").equals(username);

  if (userFind.length !== 0) {
    res.send("Admin already exist");
    return;
  }
  const user = new Admin({ username: username, password: password });

  await user.save();
  res.send({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  console.log("enterrr");
  const { title, description, price, imageLink } = req.body;
  const course = new Course({ title, description, price, imageLink });
  await course.save();
  const courseId = course._id;

  const adminCourse = await Admin.findOne({ username: req.headers.username });
  adminCourse.coursePublished = [...adminCourse.coursePublished, courseId];
  adminCourse.save();

  res.send({ message: "Course created successfully", courseId: courseId });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({ courses: courses });
});

module.exports = router;
