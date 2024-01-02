const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course } = require("../db");
const { mongo, default: mongoose } = require("mongoose");

// User Routes
router.post("/signup", (req, res) => {
  // Implement user signup logic
  User.create({
    userName: req.body.userName,
    password: req.body.password,
  });
  res.json("User created successfully");
});

router.get("/courses", (req, res) => {
  // Implement listing all courses logic
  Course.find().then((courses) => {
    res.json(courses);
  });
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const { courseId } = req.params;
  const userName = req.headers.userName;
  User.updateOne(
    { userName },
    {
      $push: {
        purchasedCourses: new mongoose.Types.ObjectId(courseId),
      },
    }
  );
  res.json("Purchased courses successfully");
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const user = await User.findOne(req.headers.userName);
  const courses = await Courses.find({
    _id: {
      $in: user.purchaseCourses,
    },
  });
  res.json(courses);
});
module.exports = router;
