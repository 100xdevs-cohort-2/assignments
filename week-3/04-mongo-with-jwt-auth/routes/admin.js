const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const router = Router();
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  try {
    const { username, password } = req.body;

    const isAdmin = await Admin.findOne({ username });

    if (isAdmin) {
      return res
        .status(409)
        .json({ message: "Admin with this username already exists" });
    }

    // Create a new admin
    await Admin.create({
      username,
      password,
    });

    res.json({
      message: "Admin created successfully",
    });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic

  try {
    const { username, password } = req.body;

    const user = await User.find({
      username,
      password,
    });

    if (user) {
      const token = jwt.sign(
        {
          username,
        },
        JWT_SECRET
      );

      res.json({
        token,
      });
    } else {
      res.status(409).json({ msg: "Incorrect username or password." });
    }
  } catch (error) {
    res.status(404).send("Signin Failed");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic

  try {
    const { title, description, price, imageLink } = req.body;

    const newCourse = await Course.create({
      title,
      description,
      price,
      imageLink,
    });

    res.json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    res.status(404).send("Unauthorized access.");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic

  try {
    const response = await Course.find({});

    res.json({
      courses: response,
    });
  } catch (error) {
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
