const { Router } = require("express");
const { adminMiddleware, existingUserName } = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post("/signup", existingUserName, (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  let newAdmin = new Admin({ username, password });
  newAdmin.save().then(() => {
    res.json({ message: "Admin created successfully" });
  });
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  let createNewCourse = new Course({ title, description, price, imageLink ,published:true});
  createNewCourse.save().then(() => {
    res.json({
      message: "Course created successfully",
      courseId: createNewCourse._id,
    });
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let allListedCourses = await Course.find();

  if (allListedCourses.length > 0) {
    res.status(200).json({
      courses: allListedCourses,
    });
  } else {
    res.status(200).json({
      message: "There are no courses listed as of now",
    });
  }
});

module.exports = router;
