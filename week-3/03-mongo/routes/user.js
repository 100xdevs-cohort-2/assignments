const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.route('/signup').post(async (req, res) => {
    // Implement user signup logic
});

router.route('/courses').get((req, res) => {
    // Implement listing all courses logic
});

router.route('/courses/:courseId').post(userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.route('/purchasedCourses').get(userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router