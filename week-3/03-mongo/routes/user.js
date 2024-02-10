const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;

  User.create({ username, password });

  res.json({ msg: "User created Successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic

  const response = await Course.find({});

  res.json({
    course: response,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = req.params.courseId;
  const username = req.headers.username;

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
    message: "Purchase complete !",
  });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });

    console.log(user.purchasedCourses);

    const courses = await Course.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });

    res.json({
      courses: courses,
    });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
