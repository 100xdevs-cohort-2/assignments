const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { adminName, adminPassword } = req.body;

  try {
    const adminExists = await Admin.findOne({ adminName: adminName });
    // console.log(adminExists);

    if (adminExists != null) {
      return res.status(400).send("Admin already exists!");
    }

    await Admin.create({ adminName, adminPassword });
    return res.status(201).json({ message: "Admin created successfully" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  const { courseTitle, courseDescription, price, imageLink } = req.body;
  try {
    const newCourse = await Course.create({
      title: courseTitle,
      description: courseDescription,
      price,
      imageLink,
      published: true,
      //   admin: adminId,
    });

    return res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    return res.status(200).send({ courses: await Course.find() });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;
