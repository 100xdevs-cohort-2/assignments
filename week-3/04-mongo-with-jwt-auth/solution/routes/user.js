const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const username = req.username;
    console.log(username);

});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router