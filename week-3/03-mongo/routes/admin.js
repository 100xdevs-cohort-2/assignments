const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

const { Admin } = require("../db");
const { Course } = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;