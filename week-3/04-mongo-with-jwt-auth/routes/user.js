<<<<<<< HEAD
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});
||||||| empty tree
=======
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
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> a3fa79c5a8030e58d055c1b728d3df963fe878fd
