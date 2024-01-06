const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic

  const username = req.body.username;
  const password = req.body.password;

  const existingUSer = await User.findOne({
    username: username,
    password: password,
  });
  if (existingUSer) {
    res.status(404).json({ msg: "Username already exists" });
  }

  const admin = new Admin({
    username: username,
    password: password,
  });

  admin.save();

  res.status(200).json({ msg: "Admin created !!" });
});

router.post("/signin", async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;

  const existingUSer = await Admin.findOne({
    username: username,
    password: password,
  });
  if (existingUSer) {
    const token = jwt.sign({ username }, JWT_SECRET);
    res.status(200).json({
      token: token,
    });
  }

  res.status(404).json({
    msg: "User not found",
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
  const courseId = req.params.courseId;
  const username = reg.headers.username;

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

  res.status(200).json("Course purchased");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
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
});

module.exports = router;
