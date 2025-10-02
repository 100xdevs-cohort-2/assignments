const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await Admin.create({
    username: username,
    password: password,
  });

  res.status(200).json({ msg: "Admin account created successfully" });
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Admin auth validation already done in middleware
  const course = {
    title: req.body.title || " ",
    description: req.body.description || " ",
    price: parseFloat(req.body.price) || 0,
    imgURL: req.body.imgURL || " ",
  };

  const newCourse = await Course.create({ ...course });
  res
    .status(200)
    .json({ message: "Course created successfully", courseId: newCourse._id });
});

router.get("/courses", adminMiddleware, async (req, res) => {
  const courses = await Course.find({}); // no filter because need all courses
  return res.status(200).json({ courses: courses });
});

module.exports = router;
