const { Router } = require("express");
const jwt = require("jsonwebtoken");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const { JWT_SECRET } = require("../config/config");
const router = Router();

// Admin Routes
router.post("/signup", async (req, res) => {
  try {
    await Admin.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.json({ message: "Admin created successfully" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(500).json({
        message: `'User already exists wih the username : ${req.body.username}`,
      });
    } else res.status(500).json({ message: err });
  }
});

router.post("/signin", async (req, res) => {
  try {
    const admin = await Admin.findOne({ username: req.body.username });
    if (!admin) {
      res.json({ message: "Invalid credentials" });
      return;
    }
    const token = jwt.sign(
      { username: req.body.username, role: "admin" },
      JWT_SECRET
    );
    res.json({ token: token });
  } catch (err) {
    res.status(500).json({
      message: "Oops! Something went wrong while signing in Please try again",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  try {
    await Course.create({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      imageLink: req.body.imageLink,
    });
    res.json({ message: "Course crated successfully" });
  } catch (err) {
    if (err.code === 11000) {
      res.status(500).json({
        message: `'Course already exists`,
      });
    } else res.status(500).json({ message: err });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: "Oops! Something went wrong. " });
  }
});

module.exports = router;
