const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const db = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password
    const existingAdmin = await db.Admin.findOne({ username: username })
    if (existingAdmin) {
        return res.status(400).send("Admin already exists")
    }
    const admin = new db.Admin({
        username: username,
        password: password
    })
    admin.save()
    res.json({
        "Msg": "Admin created successfully"
    })
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let courseId = 1

});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;