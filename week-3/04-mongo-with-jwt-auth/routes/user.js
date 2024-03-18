const { Router } = require('express');
const router = Router();
const jwt = require('jsonwebtoken');
const userMiddleware = require('../middleware/user');
const { User } = require('../db');
const secret = require('../config').JWT_SECRET;
const { ObjectId } = require('mongoose').Types;
// User Routes
router.post('/signup', (req, res) => {
  // Implement user signup logic
  const username = req.body.username;
  const password = req.body.password;
  User.create({ username, password }).then(function () {
    res.json({ message: 'User created successfully' });
  });
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await User.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username }, secret);
    res.json({ token });
  } else {
    res.status(411).json({ message: 'incorrect username or password' });
  }
});

router.get('/courses', async (req, res) => {
  // Implement listing all courses logic
  const response = await Course.find({});
  res.json({ courses: response });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  const courseId = new ObjectId(req.params.courseId);
  const username = req.username;
  await User.updateOne({ username }, { $push: { purchasedCourses: courseId } });
  res.json({
    message: 'purchase complete',
  });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  const username = req.username;
  const data = await User.findOne({ username }).populate('purchasedCourses');
  res.json({ message: 'purchased courses', courses: data.purchasedCourses });
});

module.exports = router;
