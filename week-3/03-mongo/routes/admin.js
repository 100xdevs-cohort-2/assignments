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
    .then(function () {
      res.json({
        msg: "Admin Create Successfully",
      });
    })
    .catch(function () {
      res.json({
        msg: "User Not Found",
      });
    });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });

  res.json({
    msg: "Course Created Successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
