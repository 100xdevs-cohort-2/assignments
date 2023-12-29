const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const adminController = require('../controllers/adminController');

// Admin Routes
router.post('/signup', adminController.createNewAdmin);

router.post('/courses', adminMiddleware, (req, res) => {
  // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
