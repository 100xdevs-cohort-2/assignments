const { Router } = require("express");
const router = Router();
const { userMiddleware, postSignup , getCourses , postPurchasedCourses, getPurchasedCourses} = require("../middleware/user");

// User Routes
router.post('/signup',postSignup);

router.get('/courses', getCourses);

router.post('/courses/:courseId', userMiddleware, postPurchasedCourses);

router.get('/purchasedCourses', userMiddleware, getPurchasedCourses);

module.exports = router