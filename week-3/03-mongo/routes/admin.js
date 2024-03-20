const { Router } = require("express");
const express = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const zod = require("zod");
const { Course, Admin } = require("../db");

router.use(express.json());

const usernameSchema = zod.string();
const passwordSchema = zod.string();

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
  const isValidUsername = usernameSchema.safeParse(username);
  const isValidPassword = passwordSchema.safeParse(password);
  const existingUser = await Admin.findOne({
    username: username,
  });
  console.log(existingUser);
  if (existingUser) {
    return res.status(400).send("User already exists");
  }
  if (isValidPassword && isValidUsername && !existingUser) {
    const admin = new Admin({
      username: username,
      password: password,
    });
    admin.save();
    res.status(200).send({ message: "Admin created successfully" });
  } else {
    res.status(422).send({ message: "Unprocessable entity" });
  }
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic

  const isValidCourseDetails = courseSchema.safeParse(req.body);

  if (isValidCourseDetails) {
    const course = new Course({ ...req.body });
    course.save();
    res
      .status(200)
      .send({ message: "Course created successfully", courseId: course._id });
  } else {
    res.status(422).send({ message: "Unprocessable entity" });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const courses = await Course.find({}).lean();
  console.log(courses);
  res.status(200).json({
    courses: courses,
  });
});

module.exports = router;
