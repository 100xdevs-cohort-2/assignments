const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const find = await Admin.findOne({ username: username });
  if (find) {
    throw new Error("user already exists");
  }
  const create = await Admin.create({
    username,
    password,
  });
  return res.json({
    Msg: "Admin creted successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  console.log(JWT_SECRET);

  const user = await Admin.find({
    username,
    password,
  });
  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.json({
      token,
    });
  } else {
    res.status(411).json({
      msg: "Something wnet wrong",
    });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const { title, description, price, imageLink } = req.body;
  const newcourse = await Course.create({
    title,
    description,
    price,
    imageLink,
  });
  res.json({
    msg: "couse created successfully",
    courseId: newcourse._id,
  });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const course = await Course.find({});

  res.json({
    course,
  });
});

module.exports = router;
