const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { Admin, User, Course } = require("../db");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  try {
    const username = req.body.username;
    const password = req.body.password;

    const existsadmin = await Admin.findOne({ username: username });
    if (existsadmin) {
      return res.json({
        msg: "Admin already exists",
      });
    }

    await Admin.create({
      username: username,
      password: password,
    });

    res.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(404).json({
      msg: "Something went wrong",
    });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  try {
    const username = req.body.username;
    const password = req.body.password;

    const existsadmin = await Admin.findOne({ username: username });
    if (!existsadmin) {
      return res.json({
        msg: "Please create your account",
      });
    }

    const token = jwt.sign({ username }, JWT_SECRET);

    res.json({
      "Your Token": token,
    });
  } catch (error) {
    res.status(404).json({
      msg: "Something went wrong",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;
  // zod
  const newCourse = await Course.create({
    title,
    description,
    imageLink,
    price,
  });

  res.json({
    message: "Course created successfully",
    courseId: newCourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({
    response,
  });
});

module.exports = router;
