const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const userController = require('../controllers/userController');
const router = Router();

// User Routes
router.post('/signup', userController.createNewUser);

router.get('/courses', userController.getAllCourses);

router.post('/courses/:courseId', userMiddleware, userController.purchaseCourse);

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router
