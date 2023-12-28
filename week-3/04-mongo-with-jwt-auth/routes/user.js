const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const userPasswordJwt = "USER";

const userAlreadyExists = async function (req, res, next) {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.status(500).json({
      error: "User Already Exists",
    });
  } else {
    next();
  }
};

// User Routes
router.post("/signup", userAlreadyExists, async (req, res) => {
  const { username, password } = req.body;
  await User.create({
    username,
    password,
    purchasedCourses: [],
  });
  res.json({
    msg: "User Created Succesfully",
  });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic
  const { username } = req.body;
  const token = jwt.sign({ username }, userPasswordJwt);
  res.json({
    token,
  });
});

router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find({});
    res.send(courses);
  } catch (e) {
    console.log(e);
    res.status(500).send("Server Error");
    return;
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const { username, password } = req.body;
  const courseId = req.params.courseId;
  console.log(courseId, username, password);
  const course = await Course.findOne({
    _id: courseId,
  });
  const user = await User.findOne({ username: username, password: password });
  user.purchasedCourses.push(course);
  await User.updateOne({ username: username, password: password }, user);
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username, password: password });
  console.log(user.purchasedCourses);
  res.json({
    purchasedCourses: user.purchasedCourses,
  });
});

module.exports = router;
