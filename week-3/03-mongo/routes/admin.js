const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
  // Implement admin signup logic
  const admin = new Admin(req.body);
  const savedAdmin = await admin.save();
  return res.json({ message: 'Admin Created Successfully', admin: savedAdmin });
});

router.post('/courses', adminMiddleware, async (req, res) => {
  const admin = req.admin;
  const id = admin._id.toString();
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
router.get('/courses', adminMiddleware, async (req, res) => {
  // Implement fetching all courses logic
  const admin = req.admin;
  const { courses } = await Admin.findById(admin._id).populate('courses');
  return res.json(courses);
});

module.exports = router;
