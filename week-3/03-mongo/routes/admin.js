const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body["username"];
  const password = req.body["password"];

  await Admin.create({
    username: username,
    password: password,
  });

  res.json({
    message: "Admin created successfully",
  });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body["title"];
  const description = req.body["description"];
  const price = req.body["price"];
  const imageLink = req.body["imageLink"];
  const published = req.body["published"];

  const course = await Course.create({
    title: title,
    description: description,
    price: price,
    imageLink: imageLink,
    published: published,
  });

  res.json({
    message: "Course created successfully",
    courseId: course._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});

  res.json({
    courses: courses,
  });
});

module.exports = router;
