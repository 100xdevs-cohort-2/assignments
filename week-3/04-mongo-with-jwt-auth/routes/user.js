const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const zod = require("zod");
const jwt = require("jsonwebtoken");
const { Course, User } = require("../db");
const JWT_SECRET = require("../config");

const userSchema = zod.object({
  username: zod.string().email(),
  password: zod.string().min(6),
});
// User Routes

router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.headers;
  try {
    const validateUser = userSchema.safeParse({
      username: username,
      password: password,
    });
    if (!validateUser.success) {
      return res.status(401).json({ err: "Invalid Username And Password" });
    }
    await User.create({
      username: username,
      password: password,
    });
    return res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

router.post("/signin", async (req, res) => {
  // Implement user signin logic
  try {
    const { username, password } = req.headers;
    const findUser = await User.findOne({
      username: username,
      password: password,
    });

    if (!findUser) {
      return res.status(401).json({ err: "User Not Found" });
    }
    const token = jwt.sign(username, JWT_SECRET);
    return res.status(201).json({ token: token });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const decoded = jwt.verify(req.headers.authorization, JWT_SECRET);
    if (!decoded) return res.status(401).json({ err: "Verification Failed" });
    const courses = await Course.find({});
    return res.status(200).json({ courses });
  } catch (err) {
    if (err.name === "JsonWebTokenError") {
      return res.status(401).json({ err: "Invalid token" });
    }
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const id = req.params.courseId;
    const username = req.username;
    const findCourse = await Course.findById(id);
    await User.updateOne(
      { username },
      {
        purchasedCourses: {
          $push: id,
        },
      }
    );
  } catch (err) {
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    console.log(req.username);
    const username = req.username;

    const findCourse = await User.findOne({ username });
    return res.status(200).json({ Courses: findCourse.purchasedCourses });
  } catch (err) {
    return res.status(500).json({ err: "Internal Server Error" });
  }
});

module.exports = router;
