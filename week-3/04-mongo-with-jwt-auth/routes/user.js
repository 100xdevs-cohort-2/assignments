const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.headers;
  const userFind = await User.where("username").equals(username);

  if (userFind.length !== 0) {
    res.send("User already exist");
    return;
  }
  const user = new User({ username: username, password: password });

  await user.save();
  res.send({ message: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.headers;
  const userExists = await User.findOne({
    username: username,
    password: password,
  });

  if (!userExists) {
    res.send("User doesn't exist in databse");
    return;
  } else {
    const token = jwt.sign(
      { username: username, password: password },
      process.env.SECRET
    );
    res.json({ token: token });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});

  res.json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;

  const userCourse = await User.findOne({ username: req.headers.username });
  userCourse.coursePurchased = [...userCourse.coursePurchased, courseId];
  userCourse.save();

  res.json({ message: "Course purchases successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username }).populate(
    "coursePurchased"
  );

  const purchasedCourses = user.coursePurchased;

  res.json({ purchasedCourses: purchasedCourses });
});

module.exports = router;
