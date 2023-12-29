const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const userController = require('../controllers/userController');
const router = Router();

// User Routes
router.post('/signup', userController.createNewUser);

router.get('/courses', (req, res) => {
  // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
  // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
  // Implement fetching purchased courses logic
});

module.exports = router
