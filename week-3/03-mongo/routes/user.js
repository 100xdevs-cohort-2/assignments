const { Router } = require("express");
const { User, Course } = require("../db");
const router = Router();
const userMiddleware = require("../middleware/user");
const { zStr } = require("../index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = zStr.safeParse(req.body.username);
  const password = zStr.safeParse(req.body.password);

  const existingUser = await User.findOne({ username });
  if (existingUser) return res.send(400, { message: "User Already Exists" });

  User.create({ username, password })
    .then(() => {
      res.send(201, { message: "User created successfully" });
    })
    .catch(() => {
      res.send(503, { message: "Something went wrong" });
    });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.send(200, { courses });
  } catch (e) {
    res.send(503, { message: "Something went wrong" });
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const username = zStr.safeParse(req.body.username);
  const courseId = zStr.safeParse(req.params.courseId);

  await User.updateOne(
    { username: username },
    { $push: { purchasedCourses: courseId } }
  );
  res.send(200, { message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username });
  res.send(200, { purchasedCourses: user.purchasedCourses });
});

module.exports = router;
