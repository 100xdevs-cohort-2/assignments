const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.status(200).json({ msg: "Admin created successfully" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  // DB cheked here, so 1 DB call saved while validating signin
  const adminExists = await Admin.findOne({
    username,
    password,
  });

  if (adminExists) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({ token: token });
  } else {
    res.status(411).json({ msg: "Incorrect credentials" });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  const course = {
    title: req.body.title,
    description: req.body.description,
    price: parseFloat(req.body.price),
    imgURL: req.body.imageLink,
  };

  const newCourse = await Course.create({ ...course });
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await Course.find({});
  return res.status(200).json({ courses: courses });
});

module.exports = router;
