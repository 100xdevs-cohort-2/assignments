const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

// Admin Routes
router.route('/signup').post(async (req, res) => {
    // Implement admin signup logic
});

router.route('/courses').post(adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.route('/courses').get(adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;