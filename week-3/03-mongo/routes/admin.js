const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  const existingAdmin = await Admin.findOne({ username: req.body.username });
  if (existingAdmin) return res.send(400, { message: "Admin Already Exists" });

  const admin = new Admin({
    username: req.body.username,
    password: req.body.password,
  });

  try {
    admin.save();
    res.send(201, { message: "Admin created successfully" });
  } catch (e) {
    res.send(503, { message: "Something went wrong" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = new Course({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    imageLink: req.body.imageLink,
    createdBy: req.headers.username,
    published: true,
  });

  const savedCourse = await course.save();

  res.send(201, {
    message: "Course created successfully",
    courseId: savedCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.send(200, { courses });
});

module.exports = router;
