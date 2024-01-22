const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  console.log(username);
  const admin = await Admin.create({
    username: username,
    password: password,
  });
  return res.status(200).json({ msg: "admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { name, description, price, ImageLink } = req.body;
  const existingcourse = await Admin.findOne({ name });
  if (existingcourse) {
    return res.status(400).send("Course wtih this ttle already exists");
  }
  const newCourse = await Course.create({
    name,
    description,
    price,
    ImageLink,
  });
  res.send({ msg: " Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

module.exports = router;
