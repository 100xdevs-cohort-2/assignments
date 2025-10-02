const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.status(200).json({ msg: "User created successfully" });
});

router.post("/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await User.findOne({
    username,
    password,
  });

  if (user) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({ token: token });
  } else {
    res.status(403).json({ msg: "Invalid credentials" });
  }
});

router.get("/courses", userMiddleware, async (req, res) => {
  const courses = await Course.find({});
  return res.status(200).json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.username;

  await User.updateOne(
    { username: username },
    { $push: { coursesPurchased: courseId } }
  );

  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.username;
  const user = await User.findOne({ username: username });

  if (!user) {
    res.status(404).json({ message: "User not found" });
  }

  const courses = await Course.find({
    _id: {
      $in: user.coursesPurchased,
    },
  });

  res.status(200).json({ purchasedCourses: courses });
});

module.exports = router;
