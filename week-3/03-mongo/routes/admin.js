const { Router } = require("express");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    await Admin.create({ username, password });
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink, published } = req.body;
  try {
    await Course.create({ title, description, price, imageLink, published });
    res.status(201).json({ message: "Course created successfully" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
