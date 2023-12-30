const { Router } = require('express');
const adminMiddleware = require('../middleware/admin');
const { Admin, Course } = require('../db/index');
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.username,
    }).then(() => {
        res.json({ message: 'Admin created successfully' });
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    }).then(() => {
        res.json({ message: 'Course created successfully' });
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    res.json(await Course.find({}));
});

module.exports = router;