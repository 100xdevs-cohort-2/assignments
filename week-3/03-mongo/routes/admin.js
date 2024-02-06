const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/schemaDB");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const adminExist = await Admin.findOne({
    username: username,
    password: password,
  });

  if (adminExist) {
    res.json({
      msg: "User already exist",
    });
  } else {
    const newAdmin = await Admin.create({
      password: password,
      username: username,
    });

    if (newAdmin) {
      res.json({
        msg: "Admin created successfully",
        admin: newAdmin,
      });
    } else {
      res.json({ msg: "Something went wrong try again." });
    }
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const courseExist = await Course.findOne({
    title,
    description,
    price,
    imageLink,
  });

  if (courseExist) {
    res.json({
      msg: "Course is already uploaded",
    });
  } else {
    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });

    if (newCourse) {
      res.json({
        msg: "Course created successfully",
        course: newCourse,
      });
    } else {
      res.json({ msg: "Something went wrong" });
    }
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  const courses = await Course.find({});
  if (courses) {
    res.json({
      courses,
    });
  } else {
    res.json({ msg: "No courses found" });
  }
});

module.exports = router;
