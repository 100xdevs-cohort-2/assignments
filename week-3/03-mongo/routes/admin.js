const { Router } = require("express");
const adminMiddleware = require("../middleware/admin.js");
const router = Router();
const { Admin } = require("../db/index.js");
const { Course } = require("../db/index.js");
// Admin Routes
router.post("/signup", async (req, res) => {
  const newAdmin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });
  await newAdmin.save();
  res.send("Admin Created Successfully!!");
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { id, title, description, price, imageLink } = req.body;
  const newCourse = new Course({
    id,
    title,
    description,
    price,
    imageLink,
  });
  const savedCourse = await newCourse.save();
  res.status(201).json({
    msg: "new course created",
    courseId: savedCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const allCourses = await Course.find();
  res.json(allCourses);
});

module.exports = router;
