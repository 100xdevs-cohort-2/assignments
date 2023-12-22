const express = require("express");
const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db/index");
const { Course } = require("../db/index");
const app = express();
const router = express.Router();
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;

  try {
    const admin = await Admin.create({ username, password });
    console.log("Admin created successfully");
    res.status(200).send("Admin created successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error creating admin");
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  try {
    const course = await Course.create({
      title,
      description,
      price,
      image: imageLink,
    });
    res.status(200).send("Course created successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Error creating admin");
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({});
  res.json(courses).send;
});

module.exports = router;
