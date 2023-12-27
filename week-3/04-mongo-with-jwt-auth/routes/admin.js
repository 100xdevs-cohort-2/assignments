const { Router } = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Admin, Course } = require("../db");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const secret = "secret";

const exists = async (username) => {
  const result = await Admin.findOne({ username: username });
  return result ? true : false;
};

const courseExists = async (title) => {
  const result = await Course.findOne({ title: title });
  return result ? true : false;
};

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (await exists(username)) {
      return res.status(400).json({ error: "Admin alredy exist!" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newAdmin = new Admin({ username, password: hashedPassword });
    await newAdmin.save();
    res.status(201).json({ message: "Admin created successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
});

router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!(await exists(username))) {
      return res.status(400).json({ error: "Admin does not exist!" });
    }

    const admin = await Admin.findOne({ username: username });

    const passwordMatch = await bcrypt.compare(password, admin.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .json({ err: "Authentication failed: incorrect password." });
    }

    const token = jwt.sign(username, secret);
    res.status(200).json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error creating admin" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const { title, description, price, imageLink, published } = req.body;
  try {
    if (await courseExists(title)) {
      return res.status(400).json({ error: "Course alredy exist!" });
    }
    const newCourse = new Course({
      title,
      description,
      price,
      imageLink,
      published,
    });
    const result = await newCourse.save();
    res
      .status(201)
      .json({ message: "Course created successfully", id: result.id });
  } catch (error) {
    res.status(500).json({ error: "Error creating course" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(500).json({ error: "Error fetching courses" });
  }
});

module.exports = router;
