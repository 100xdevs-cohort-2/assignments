const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUSer = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUSer) {
    res.status(404).json({ msg: "Username already exists" });
  }

  const admin = new Admin({
    username: username,
    password: password,
  });

  admin.save();

  res.status(200).json({ msg: "Admin created !!" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });

  res.status(200).json({ msg: "Course added !!", courseId: course._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const response = await Course.find({});
  res.status(200).json({
    courses: response,
  });
});

module.exports = router;
