const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
  const { username, password } = req.body
  const newAdmin = new Admin({ username, password });
  newAdmin.save()
    .then(() => {
      res.status(201).json({ message: 'Admin created successfully' });
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
  const { title, description, price, imageLink } = req.body;
  const newCourse = new Course({ title, description, price, imageLink });
  newCourse.save()
    .then((data) => {
      res.status(201).json({ message: 'Course created successfully', courseId: data._id });
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
  Course.find()
    .then((data) => {
      res.status(200).json(data);
    })
});

module.exports = router;