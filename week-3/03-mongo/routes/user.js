const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { Course, User } = require('../db');
const { ObjectId } = require('mongoose').Types;
// User Routes
router.post('/signup', (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;
  User.create({ username, password });
  res.json({ message: 'user created successfully' });
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({ courses: response });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = new ObjectId(req.params.courseId);
  const { username, password } = req.headers;
  await User.updateOne(
    { username, password },
    { $push: { purchasedCourses: courseId } },
  );
  res.json({
    message: 'purchase complete',
  });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const { username, password } = req.headers;
  const data = await User.findOne({ username, password }).populate(
    'purchasedCourses',
  );
  res.json({ message: 'purchased courses', courses: data.purchasedCourses });
});

module.exports = router;
