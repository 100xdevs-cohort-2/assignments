const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post("/signup", (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  Admin.create({
    username,
    password,
  })
    .then(() => {
      res.json({
        message: "Admin created successfully!",
      });
    })
    .catch(() => {
      res.json({
        message: "Admin creation failed!",
      });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  // ********* Async/Await Syntax *********
  //   const newCourse = await Course.create({
  //     title,
  //     description,
  //     imageLink,
  //     price,
  //   });
  //   res.json({
  //     message: "Course created successfully",
  //     courseId: newCourse._id,
  //   });

  Course.create({
    title,
    description,
    imageLink,
    price,
  }).then((response) => {
    res.json({
      message: "Course created successfully",
      courseId: response._id,
    });
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  Course.find({}).then((response) => {
    res.json({
      courses: response,
    });
  });
});

module.exports = router;
