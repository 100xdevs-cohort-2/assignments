const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const adminController = require('../controllers/adminController');
const router = Router();

// Admin Routes
router.post('/signup', adminController.createNewAdmin);

router.post('/courses', adminMiddleware, adminController.createNewCourse);

router.get('/courses', adminMiddleware, adminController.getAllCourses);

module.exports = router;
