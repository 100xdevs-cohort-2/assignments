const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { Course, Admin } = require("../db/index");

const { JWT_SECRET } = require("../config");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic

  try {
    const { username, password } = req.headers;
    await Admin.create({
      username,
      password,
    });
    return res.status(201).json({ msg: "New Admin Created" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal Servor Error" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signin logic
  try {
    const { username, password } = req.headers;
    const findAdmin = await Admin.findOne({
      username: username,
      password: password,
    });

    if (!findAdmin) {
      return res.status(401).json({ err: "Admin Not Found" });
    }
    const token = jwt.sign(username, JWT_SECRET);

    return res.status(200).json({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal Servor Error" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { id, title, description, price, imageLink, published } = req.body;

  const newCourse = await Course.create({
    title,
    description,
    price,
    imageLink,
    published,
  });
  res
    .status(201)
    .json({ msg: "Course Created Succesfully", id: newCourse._id });
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
  const allCourses = Course.find({});
  res.status(200).json({ Courses: allCourses });
});

module.exports = router;
