const { Router } = require("express");
const {postSignup , postCourses , getCourses , authenticateUser} = require("../middleware/admin");
const { Admin } = require('../db');
const router = Router();

// Admin Routes
router.post('/signup',postSignup);

router.post('/courses',authenticateUser, postCourses );

router.get('/courses',authenticateUser, getCourses);

module.exports = router;