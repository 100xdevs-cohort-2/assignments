const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const pass = req.body.password;
  await User.create({ username: username, password: pass });
  res.json({ message: "User created successfully" });
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  res.json({
    courses,
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const corId = req.params.courseId;
  console.log(corId);
  const username = req.headers.username;
  console.log(username);

  const course = await Course.findOne({ id: corId });
  console.log(course);

  if (!course) {
    res.status(401).send("NOTHING FOUND");
    return;
  }
  await User.updateOne(
    { username: username },
    { $push: { purchasedCourses: course } }
  );
  res.json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne({ username: req.headers.username });
  console.log(user);
  res.json(user.purchasedCourses);
});

module.exports = router;
