const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    // Check if admin with the same username already exists
    const existingAdmin = await Admin.findOne({ username });

    if (existingAdmin) {
      return res
        .status(409)
        .json({ message: "Admin with this username already exists" });
    }

    // Create a new admin
    const newAdmin = new Admin({ username, password });
    await newAdmin.save();

    res.json({ message: "Admin created successfully" });
  } catch (error) {
    console.error("Error in admin signup:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { title, description, price, imageLink } = req.body;

  try {
    // Create a new course
    const newCourse = new Course({
      title,
      description,
      price,
      imageLink,
      published: true,
    });
    await newCourse.save();

    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    console.error("Error in course creation:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  try {
    // Fetch all courses
    const courses = await Course.find();
    res.json({ courses });
  } catch (error) {
    console.error("Error in fetching all courses:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
