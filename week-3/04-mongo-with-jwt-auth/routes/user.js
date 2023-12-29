const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { jwtsecret } = require("../config");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  User.create({
    username: username,
    password: password,
  });

  res.json({ msg: "User created successfully" });
});

router.post("/signin", (req, res) => {
  // Implement admin signup logic

  const username = req.body.username;
  const password = req.body.password;

  const user = User.find({
    username: username,
    password: password,
  });

  if (user) {
    const token = jwt.sign({ username }, jwtsecret);

    res.json({ token });
  } else {
    res.status(411).json("Wrong credentials");
  }
});

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InVzZXIxIiwiaWF0IjoxNzAzODMxMTE4fQ.Omi4tFc0yBCb_6-Zd5eHkO6EC6aiD27Xw1Ehs2Aw7Kk

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const courses = await Course.find({});

  res.json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  const courseId = req.params.courseId;
  const username = req.username;

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: new mongoose.Types.ObjectId(courseId),
      },
    }
  );

  res.json({ msg: "Course bought !" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.username,
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({ courses: courses });
});

module.exports = router;
