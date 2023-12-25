const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Course, Admin } = require("../db/index");

router.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingAdmin = await Admin.findOne({ username });
    if (existingAdmin) {
      return res
        .status(400)
        .json({ error: "Admin with this username already exists" });
    }
    const newAdmin = Admin.create({ username, password });

    res.status(201).json({ message: "New Admin Created" + newAdmin.username });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  try {
    const { title, description, price, imageLink } = req.body;
    if (!title || description || !price || !imageLink) {
      return res.status(401).json({ error: "All fields are required." });
    }
    const newCourse = await Course.create({
      title: title,
      description: description,
      price: price,
      imageLink: imageLink,
    });

    res.status(201).json({ msg: "New Course Added" + newCourse.title });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find();
    res.status(200).json({ courses });
  } catch (err) {
    res.status(500).json({ Error: "Internal Server Error" });
  }
});

module.exports = router;
