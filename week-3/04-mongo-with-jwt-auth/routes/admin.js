const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const adminController = require('../controllers/adminController');
const router = Router();

// Admin Routes
router.post('/signup', adminController.createNewAdmin);

router.post('/signin', adminController.signInAdmin);

router
  .route('/courses')
  .get(adminMiddleware, adminController.getAllCourses)
  .post(adminMiddleware, adminController.createNewCourse);

module.exports = router;
