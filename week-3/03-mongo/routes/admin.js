const express = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = express.Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  Admin.create({ username: username, password: password }).then(() =>
    res.json("User created successfully")
  );

  // next();
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = Course.create({
    title,
    description,
    price,
    imageLink,
  }).then(() => {
    res.json({
      message: "Course created successfully",
      courseId: `${newCourse._id}`,
    });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic

  Course.find().then((courses) => {
    res.json(courses);
  });
});

module.exports = router;
