const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const router = Router();
const { Admin, Course } = require('../db');
const jose = require('../utils/jwt');
const { tokenExtractor } = require('../utils/middlware');
const { SECRET } = require('../../03-mongo/utils/config');

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  try {
    const admin = new Admin(req.body);
    const savedAdmin = await admin.save();
    return res.json({
      message: 'Admin Created Successfully',
      admin: savedAdmin,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send();
  }
});

router.post('/signin', async (req, res) => {
  // Implement admin signup logic
  const username = req.headers['username'];
  // INFO: not matching password here purposely
  const password = req.headers['password'];
  const admin = await Admin.findOne({ username });
  if (!admin) return res.status(404);
  // INFO: passing admin record purposely
  const token = jose.signJwt({ username: admin.username, id: admin._id });
  return res.status(201).json({ token, username, id: admin._id });
});

router.post('/courses', tokenExtractor, adminMiddleware, async (req, res) => {
  const admin = req.admin;
  const id = req.adminId;
  const course = new Course({ ...req.body, admin: id });
  const courseCreated = await course.save();
  admin.courses = admin.courses.concat(courseCreated._id);
  await admin.save();
  return res.json({
    message: 'Course Created Successfully',
    courseId: courseCreated.id,
  });
  // Implement course creation logic
});

// TODO: check why only extracting property `courses` works?
router.get('/courses', tokenExtractor, adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const admin = req.admin;
  const { courses } = await Admin.findById(admin._id).populate('courses');
  return res.json(courses);
});

module.exports = router;
