const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  // check if a user with this username already exists
  await User.create({
    username: username,
    password: password,
  });

  res.json({
    message: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  const user = await User.find({ username, password });
  if (!user) {
    return res.status(403).json({ msg: "user not found" });
  }
  const token = jwt.sign({ username }, JWT_SECRET);
  res.json({ token: token });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;
  User.updateOne(
    { username },
    {
      $push: { purchasedCourses: courseId },
    }
  ).catch((e) => {
    console.log(e);
  });
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username } = req.headers;
  const currentUser = await User.findOne({ username });
  const purchasedCourses = await Course.find({
    _id: {
      $in: currentUser.purchasedCourses,
    },
  });
  res.json({ courses: purchasedCourses });
});

module.exports = router;
