const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const pass = req.body.password;
  await Admin.create({ username: username, password: pass });
  res.json({ message: "Admin created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const cid = Math.floor(Math.random() * 1000);
  await Course.create({
    id: cid,
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    published: true,
  });
  res.json({
    message: "Course created successfully",
    courseId: cid,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find();
  res.json({
    courses,
  });
});

module.exports = router;
