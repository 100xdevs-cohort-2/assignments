const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

router.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  await User.create({
    username: username,
    password: password,
  });

  res.status(200).json({ msg: "User created successfully" });
});

// open endpoint i.e., no need to sign-in
// because users can just check all the courses available
router.get("/courses", async (req, res) => {
  const courses = await Course.find({});
  return res.status(200).json({ courses: courses });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  await User.updateOne(
    { username: username },
    { $push: { coursesPurchased: courseId } }
  );

  res.status(200).json({ message: "Course purchased successfully" });
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  const username = req.headers.username;
  const user = await User.findOne({ username: username });

  const courses = await Course.find({
    _id: {
      $in: user.coursesPurchased,
    },
  });

  res.status(200).json({ purchasedCourses: courses });
});

module.exports = router;
