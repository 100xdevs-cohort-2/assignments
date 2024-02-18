const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");
const jwt = require("jsonwebtoken");
const { jwtSecretKey } = require("../constants");

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  let newAdmin = new Admin({ username, password });
  newAdmin.save().then(() => {
    res.json({ message: "Admin created successfully" });
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    let userExist = await Admin.findOne({ username });
    if (userExist) {
      let createJwt = jwt.sign({ username }, jwtSecretKey);
      res.json({ token: createJwt });
    } else {
      res.json({ message: `no user exist with ${username} email` });
    }
  } catch (error) {
    console.log("error: ", error);
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  let createNewCourse = new Course({
    title,
    description,
    price,
    imageLink,
    published: true,
  });
  createNewCourse.save().then(() => {
    res.json({
      message: "Course created successfully",
      courseId: createNewCourse._id,
    });
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  let allCourses = await Course.find({});
  res.json({ courses: allCourses });
});

module.exports = router;

// admin routes are completed
