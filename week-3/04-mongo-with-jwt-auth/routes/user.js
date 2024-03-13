const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  await User.create({
    username,
    password,
  });
  res.json({
    msg: "User created successfully",
  });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  let find = await User.findOne({
    username,
    password,
  });
  if (find) {
    const token = jwt.sign(
      {
        username,
      },
      JWT_SECRET
    );
    res.send("Bearer " + token);
  } else {
    res.status(404).send("User not found");
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  let courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const id = req.params.courseId;
  const username = req.username;
  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: id,
      },
    }
  );
  res.json({
    msg: "Course purchased successfully",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const user = await User.findOne({
    username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.json({
    courses,
  });
});

module.exports = router;
