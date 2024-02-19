const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body["username"];
  const password = req.body["password"];

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
  const username = req.body["username"];
  const password = req.body["password"];
  await User.find({
    username: username,
    password: password,
  }).then((user) => {
    if (user) {
      const token = jwt.sign(
        {
          username: username,
        },
        JWT_SECRET
      );
      res.json({
        token: token,
      });
    } else {
      res.status(403).send({
        msg: "Invalid Credentials",
      });
    }
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});

  res.json({
    courses: courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params["courseId"];
  const username = req.headers["username"];

  await User.updateOne(
    {
      username: username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.json({
    message: "Purchase complete!",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({
    username: req.headers["username"],
  });

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({
    courses: courses,
  });
});

module.exports = router;
