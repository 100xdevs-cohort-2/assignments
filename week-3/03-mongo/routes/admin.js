const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const newAdmin = new Admin({ username, password });
  await newAdmin.save();
  res.status(200).send("Admin added");
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
    .json({ message: "Course Added Successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.status(200).json(courses);
});

module.exports = router;
