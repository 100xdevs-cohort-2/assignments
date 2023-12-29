const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const { username, password } = req.body;
  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    res.status(409).json({ message: "Admin Already Exists" });
    return;
  }

  try {
    const hashedPass = await bcrypt.hash(password, 5);
    await Admin.create({
      username: username,
      encryptedpassword: hashedPass,
      password: password, // Added just for testing, should not be added in actual scenario
    });
    res.status(200).json({ message: "Admin created successfully" });
  } catch (err) {
    res.status(500).json({ errorMessage: err.message });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const existingAdmin = await Admin.findOne({ username });
  if (!existingAdmin) {
    res.status(404).json({ message: "Admin does not Exists" });
    return;
  }

  const correctPass = await bcrypt.compare(
    password,
    existingAdmin.encryptedpassword
  );
  if (!correctPass) {
    res.status(401).json({ message: "Wrong Password" });
    return;
  }

  const signature = jwt.sign(username, process.env.JWT_PASSWORD);
  res.status(200).json({ signature });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const course = await Course.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageLink: req.body.imageLink,
    });
    res.status(200).json({
      message: "Course created successfully",
      courseId: course._id,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
