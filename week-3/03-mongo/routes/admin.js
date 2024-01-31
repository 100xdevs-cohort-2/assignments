const { Router, application, response } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { adminModel, userModel, courseModel } = require("../db/index");
console.log(adminModel, courseModel);
// Admin Routes
router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const admin = new adminModel(req.body);
  try {
    await admin.save();
    res.send(admin);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post("/courses", adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const course = new courseModel(req.body);
  try {
    await course.save();
    res.send(course);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.get("/courses", adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  // console.log(req);
  try {
    const courses = await courseModel.find();
    res.send(courses);
  } catch (err) {
    res.status(404).send(err);
  }
});

module.exports = router;
