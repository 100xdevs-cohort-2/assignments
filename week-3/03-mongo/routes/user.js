const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');
const { default: mongoose } = require('mongoose');

// User Routes
router.post('/signup', async (req, res) => {
  // Implement user signup logic
  const newUser = new User(req.body);
  const user = await newUser.save();
  return res.json({ message: 'User created successfully', user });
});

router.get('/courses', userMiddleware, async (req, res) => {
  // Implement listing all courses logic
  const courses = await Course.find({});
  return res.json(courses);
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
  // Implement course purchase logic
  try {
    const user = req.user;
    const courseId = req.params.courseId;
    if (!mongoose.Types.ObjectId.isValid(courseId))
      res.status(400).json({ message: 'Incorrect course Id' });
    const course = await Course.findById(courseId);
    if (!course) return res.status(404).send();
    user.courses = user.courses.concat(courseId);
    await user.save();
    return res.json({ message: 'Course purchased successfully' });
  } catch (error) {
    console.log(error.message);
    return res.status(400).send();
  }
});

// TODO: check why only extracting property `courses` works?
router.get('/purchasedCourses', userMiddleware, async (req, res) => {
  // Implement fetching purchased courses logic
  try {
    const user = req.user;
    const { courses } = await User.findById(user._id).populate('courses');
    console.log({ courses });
    res.json(courses);
  } catch (error) {
    console.log({ error });
    res.status(500).send();
  }
});

module.exports = router;
