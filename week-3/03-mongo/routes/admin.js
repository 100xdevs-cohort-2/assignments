const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

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

// Router in express helps to maintain different routes for different functionality such that the application logic looks cleaner. Sought of making smaller express app using Router within the main app and then integrating with the whole application 

// at the end we export the mini express application and then use it inside the bigger application
