const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const jwt = require("jsonwebtoken");
const zod = require("zod");

const courseSchema = zod.object({
  title: zod.string(),
  description: zod.string(),
  price: zod.number().int(),
  imageLink: zod.string(),
});

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await Admin.findOne({ username: username });

  if (existingUser) {
    res.status(404).json({ msg: "User already exists" });
  }

  let newUser = await Admin.create({ username: username, password: password });

  if (newUser) {
    res.json({ msg: "Admin created successfully" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUser = await Admin.findOne({
    username: username,
    password: password,
  });

  try {
    if (existingUser) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET);
      res.json({ token });
    } else {
      res.status(411).json({ msg: "Wrong Username or Password" });
    }
  } catch (err) {
    console.log(err);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const price = req.body.price;
  const imageLink = req.body.imageLink;

  const isValidCourseDetails = courseSchema.safeParse({
    title,
    price,
    description,
    imageLink,
  });

  if (!isValidCourseDetails) {
    res.status(411).json({ msg: "Invalid Course Details!" });
  }

  const newCourse = await Course.create({
    title,
    price,
    description,
    imageLink,
  });

  if (newCourse) {
    res
      .status(200)
      .json({ msg: "Course created successfully", courseId: newCourse._id });
  } else {
    res.status(422).json({ msg: "Unprocessable entity" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({}).lean();
  res.status(200).json({
    courses: courses,
  });
});

module.exports = router;
