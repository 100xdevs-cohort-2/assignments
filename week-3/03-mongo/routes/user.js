const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  User.create({ username, password }).then(() => {
    res.json({ msg: "User created Successfully" });
  });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const response = await Course.find({});

  res.json({
    courses: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic

  try {
    // Implement course purchase logic

    const courseId = req.params.courseId;
    const username = req.headers.username;

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

    res.json({ msg: "Purchase Complete" });

    // Add return statement to terminate function execution
    return;
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic

  const user = await User.findOne({
    username: req.headers.username,
  });

  // console.log(user.purchasedCourses);

  const courses = await Course.find({
    _id: {
      $in: user.purchasedCourses,
    },
  });

  res.json({ courses: courses });
});

module.exports = router;
