const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const adminNotExists = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
// Admin Routes

router.post("/signup", adminNotExists, async (req, res) => {
  // Implement admin signup logic
  const adminName = req.body.adminName;
  const password = req.body.password;
  await Admin.create({
    adminName,
    password,
  });
  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  let title = req.body.title;
  let description = req.body.description;
  let price = req.body.price;
  let imageLink = req.body.imageLink;
  // let id = 1;
  const newCourse = await Course.create({
    // id: id,
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    // published: true,
  });
  res.json({
    message: "Course created successfully",
    // id: id
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    let allCourses = await Course.find({});
    res.json({
      courses: allCourses,
    });
  } catch (error) {
    console.log(error);
  }
});

// router.listen(3000);

module.exports = router;
