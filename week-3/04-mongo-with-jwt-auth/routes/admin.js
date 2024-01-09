const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();
const jwt = require('jsonwebtoken');
const { Admin, Course } = require('../db');
const { isCourseTitlePresent } = require('../utils/mongodb/courseCheck');
const { isAdminDetailsValid } = require('../utils/mongodb/adminCheck');
const environment = require('../utils/constants');

// Admin Routes
router.post('/signup', async (req, res) => {
  const adminInfo = req.body;
  if (!adminInfo.username || !adminInfo.password)
    return res.status(404).send('Please provide proper credentials');

  try {
    await Admin.create(adminInfo);
    res.status(201).json({ message: 'Admin created successfully' });
  } catch (error) {
    console.log({ error });
  }
});

router.post('/signin', async (req, res) => {
  const adminInfo = req.body;
  if (!adminInfo.username || !adminInfo.password)
    return res.status(404).send('Please provide proper credentials');

  try {
    const isDetailsValid = await isAdminDetailsValid(adminInfo);
    if (isDetailsValid) {
      const token = jwt.sign(
        { username: adminInfo.username },
        environment.JWT_SECRET
      );
      res.json({ token });
    } else {
      res.status(403).json({ message: 'Invalid username or password' });
    }
  } catch (error) {
    console.log({ error });
  }
});

router.post('/courses', adminMiddleware, async (req, res) => {
  const body = req.body;
  try {
    const courseTitleUnique = await isCourseTitlePresent(body.title);
    if (!courseTitleUnique) {
      const newCourse = await Course.create(body);
      res.status(201).json({
        message: 'Course created successfully',
        courseId: newCourse._id,
      });
    } else {
      res.status(400).json({ message: 'This course already exists' });
    }
  } catch (error) {
    console.log({ error });
  }
});

router.get('/courses', adminMiddleware, async (_, res) => {
  try {
    const resp = await Course.find();
    res.json({ course: resp });
  } catch (error) {
    console.log({ error });
  }
});

module.exports = router;
