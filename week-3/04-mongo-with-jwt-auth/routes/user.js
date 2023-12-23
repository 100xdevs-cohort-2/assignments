const { Router } = require('express');
const router = Router();
const userMiddleware = require('../middleware/user');
const { User, Course } = require('../db');
const { default: mongoose } = require('mongoose');
const { signJwt } = require('../utils/jwt');
const { tokenExtractor } = require('../utils/middlware');

// User Routes
router.post('/signup', async (req, res) => {
  const newUser = new User(req.body);
  const user = await newUser.save();
  const token = signJwt({ user: user.username, id: user._id });
  return res.json({ message: 'User created successfully', user, token });
});

router.post('/signin', (req, res) => {
  // Implement admin signup logic
  const username = req.headers['username'];
  const user = User.findOne({ username });
  if (!user) return res.status(404);
  const token = signJwt({ user: user.username, id: user._id });
  return res.json({ message: 'User signed successfully', token });
});

router.get('/courses', tokenExtractor, async (req, res) => {
  const courses = await Course.find({});
  return res.json(courses);
});

router.post(
  '/courses/:courseId',
  tokenExtractor,
  userMiddleware,
  async (req, res) => {
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
  }
);

router.get(
  '/purchasedCourses',
  tokenExtractor,
  userMiddleware,
  async (req, res) => {
    try {
      const user = req.user;
      const { courses } = await User.findById(user._id).populate('courses');
      res.json(courses);
    } catch (error) {
      console.log({ error });
      res.status(500).send();
    }
  }
);

module.exports = router;
