const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { Course, User } = require('../db');
const { isCourseIdValid } = require('../utils/mongodb/courseCheck');

// User Routes
router.post('/signup', async (req, res) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password)
    return res.status(404).send('Please provide proper credentials');

  try {
    await User.create(userInfo);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.log({ error });
  }
});

router.get('/courses', userMiddleware, async (_, res) => {
  try {
    const resp = await Course.find();
    res.json({ courses: resp });
  } catch (error) {
    console.log({ error });
  }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  const courseId = req.params.courseId;
  const username = req.headers.username;

  try {
    const courseIdValid = await isCourseIdValid(courseId);
    if (courseIdValid) {
      await User.updateOne(
        { username },
        { $push: { purchasedCourses: courseId } }
      );
      res.json({ message: 'Course purchased successfully' });
    } else {
      res.status(400).json({ message: 'The provided Course Id is invalid' });
    }
  } catch (error) {
    console.log({ error });
  }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  const username = req.headers.username;

  try {
    const user = await User.findOne({ username });
    const resp = await Course.find({ _id: { $in: user.purchasedCourses } });
    res.json({ courses: resp });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
