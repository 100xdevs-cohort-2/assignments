const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin, Course } = require("../db/index.js");

const JWT = require("jsonwebtoken");

const {
  adminSchema,
  courseSchema,
  JwtSecret,
  loginSchema,
} = require("../utils/utils");

// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const validate = adminSchema.safeParse(req.body);

  if (!validate.success) {
    console.log(validate.error);
    const errorMessage = validate.error.errors.map(
      (err) => err.path[0] + " input is invalid: " + err.message
    );
    return res.status(500).send({
      message: "Validation error",
      cause: errorMessage,
    });
  }

  try {
    const admin = await Admin.findOne({ username: req.body.username }).exec();
    if (admin) {
      return res
        .status(500)
        .send({ message: "Admin already exists with this email" });
    }
    const newAdmin = await Admin.create(req.body);
    res.status(201).json({
      message: "Admin created successfully",
      adminId: newAdmin._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const validate = loginSchema.safeParse(req.body);

  if (!validate.success) {
    console.log(validate.error);
    const errorMessage = validate.error.errors.map(
      (err) => err.path[0] + " input is invalid: " + err.message
    );

    return res.status(500).send({
      message: "validation error",
      cause: errorMessage,
    });
  }
  const isAdmin = await Admin.findOne({ username: req.body.username }).exec();
  console.log(isAdmin);
  if (!isAdmin || isAdmin.password !== req.body.password) {
    return res
      .status(500)
      .send({ message: "Admin does not exist with these credentials" });
  }

  try {
    const token = JWT.sign(
      { username: req.body.username, password: req.body.password },
      JwtSecret
    );
    res.status(200).json({ token: token });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const validate = courseSchema.safeParse(req.body);
  if (!validate.success) {
    console.log(validate.error);
    const errorMessage = validate.error.errors.map(
      (err) => err.path[0] + " input is invalid: " + err.message
    );
    return res.status(500).send({
      message: "Validation error",
      cause: errorMessage,
    });
  }
  try {
    const isCourseExist = await Course.findOne({
      title: req.body.title,
      published: true,
    }).exec();
    if (isCourseExist) {
      return res
        .status(500)
        .send({ message: "Course already exists with this title" });
    }
    const newCourse = await Course.create(req.body);
    res.status(201).json({
      message: "Course created successfully",
      courseId: newCourse._id,
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  try {
    const courses = await Course.find({ published: true }).exec();
    if (!courses || courses.length === 0) {
      return res
        .status(500)
        .send({ message: "There's no published courses at the moment" });
    }
    res.status(200).json(courses);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .send({ message: "Internal Server Error", error: error.message });
  }
});

module.exports = router;
