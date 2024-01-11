const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  const userCreated = await User.create({
    username,
    password,
  });

  res.status(201).send({
    message: "User created successfully",
    user_id: userCreated._id,
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const allCourses = await Course.find({});

  res.status(200).send({ course: allCourses });
});

// Purchases a course. courseId in the URL path should be replaced
router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    {
      username,
    },
    {
      $push: {
        purchasedCourses: courseId,
      },
    }
  );
  res.status(201).send({
    message: "purchase complete!",
  });
});

// Lists all the courses purchased by the user
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.headers.username;
  const user = await User.findOne({
    username,
  });
  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });
  res.status(200).send({
    courses: courses,
  });
});

module.exports = router;
