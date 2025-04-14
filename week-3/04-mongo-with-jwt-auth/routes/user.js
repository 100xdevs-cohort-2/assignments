const { Router } = require("express");
const jwt = require("jsonwebtoken");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config/config");

// User Routes
router.post("/signup", async (req, res, next) => {
  try {
    await User.create({
      username: req.body.username,
      password: req.body.password,
    });
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    res.status(500).json({ message: err });
  }
});

router.post("/signin", async (req, res, next) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (!user) {
      res.status(401).json({ message: "Invalid credentials" });
      return;
    }
    const token = await jwt.sign({ username: req.body.username }, JWT_SECRET);
    res.status(200).json({ token: token });
  } catch (err) {
    next(err);
  }
});

router.get("/courses", async (req, res, next) => {
  try {
    const courses = await Course.find({});
    res.json({ courses });
  } catch (err) {
    next(err);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res, next) => {
  try {
    const courseId = req.params.courseId;
    const username = req.username;
    await User.updateOne(
      { username: username },
      {
        $push: {
          purchased: courseId,
        },
      }
    );
    res.status(201).json({message : 'Course successfully purchased'});
  } catch (err) {
    next(err);
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res, next) => {
  try {
    // Implement fetching purchased courses logic
    const username = req.username;
    const user = await User.findOne({ username: username }).populate("purchased");
    res.status(200).json({ courses: user.purchased });
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
