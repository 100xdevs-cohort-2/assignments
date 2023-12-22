const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

//! User Routes

//TODO :  Implement user signup logic

router.post("/signup", async (req, res) => {
  const { username, password } = req.body;

  const user = await User.findOne({ username: username });
  if (!user) {
    await User.create({
      username,
      password,
    });
    return res.status(200).json({ msg: "new user created succesfully !" });
  } else {
    return res.status(401).json({ msg: "User already exists !" });
  }
});

//TODO :  Implement listing all courses logic
router.get("/courses", userMiddleware, async (req, res) => {
  const courses = await Course.find({});
  res.status(200).json(courses);
});

//TODO : Implement course purchase logic

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  const course = await Course.findOne({ _id: req.params.courseId });

  if (!course) {
    res.status(404).json("No Course Found !");
  } else {
    const updatedUser = await User.findOneAndUpdate(
      { username: req.headers.username },
      {
        $push: {
          purchasedCourses: course,
        },
      },
      { new: true }
    );
    res.status(200).json({ msg: "course purchased succesfully" });
  }
});

//TODO :  Implement fetching purchased courses logic
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.headers.username,
    });
    await user.populate("purchasedCourses");
    res.json({ purchasedCourses: user.purchasedCourses });
  } catch (error) {
    res.json({ error: error.message });
  }
});

module.exports = router;
