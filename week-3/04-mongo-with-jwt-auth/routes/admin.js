const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, User, Course } = require('../db');
const router = Router();
const jwt = require('jsonwebtoken');
const secret = require('../config').JWT_SECRET;

// Admin Routes
router.post('/signup', (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  Admin.create({ username, password }).then(function () {
    res.json({ message: 'Admin created successfully' });
  });
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.body.username;
  const password = req.body.password;
  const user = await Admin.findOne({ username, password });
  if (user) {
    const token = jwt.sign({ username }, secret);
    res.json({ token });
  } else {
    res.status(411).json({ message: 'incorrect username or password' });
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  // Implement course creation logic
  const title = req.body.title;
  const description = req.body.description;
  const imageLink = req.body.imageLink;
  const price = req.body.price;

  const data = await Course.create({ title, description, imageLink, price });

  res.json({ message: 'course created successfully', courseId: data._id });
});

router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const response = await Course.find({});
  res.json({ courses: response });
});

module.exports = router;
