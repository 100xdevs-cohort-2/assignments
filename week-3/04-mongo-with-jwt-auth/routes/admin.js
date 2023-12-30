const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const jwtpassword = "secretpassword#123";

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = new Admin({
    username,
    password,
  });

  await admin.save();
  res.status(200).json({
    message: "Admin created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const admin = await Admin.findOne({ username, password });
  if (!admin) {
    return res.status(403).json({ message: "Admin not found" });
  }
  const token = jwt.sign(username, jwtpassword);
  res.status(200).json({
    message: "Login success",
    token,
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = new Course({
    title,
    description,
    price,
    imageLink,
  });

  await newCourse.save();
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.status(200).json(courses);
});

module.exports = router;
