const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { adminModel, userModel, courseModel } = require("../db/index");
// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const user = new userModel(req.body);
  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  const courses = await courseModel.find();
  try {
    res.send(courses);
  } catch (err) {
    res.status.apply(404).send(err);
  }
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    await userModel.updateOne(
      { username: req.headers.username },
      { $push: { purchasedCourses: req.params.courseId } }
    );

    res.send({ message: "Course purchased successfully" });
  } catch (e) {
    res.send({ message: e });
  }
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = await userModel.findOne({
      username: req.headers.username,
    });
    const courses = await courseModel.find({
      _id: {
        $in: user.purchasedCourses,
      },
    });
    res.json({ courses: courses });
  } catch (e) {
    res.send({ message: e });
  }
});

module.exports = router;
