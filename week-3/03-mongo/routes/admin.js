const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require("../db/index");


// Admin Routes
<<<<<<< HEAD
router.post('/signup', async (req, res) => {
=======
router.post('/signup', (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement admin signup logic
    await Admin.create(
        {
            username: req.body.username,
            password: req.body.password,
        }
    );
    res.json({ message: 'Admin created successfully' });
});

<<<<<<< HEAD
router.post('/courses', adminMiddleware, async (req, res) => {
=======
router.post('/courses', adminMiddleware, (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement course creation logic
    let data = await Course.create(
        {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageLink,
        }
    );
    res.json({ message: 'Course created successfully', courseId: data._id });

});

<<<<<<< HEAD
router.get('/courses', adminMiddleware, async (req, res) => {
=======
router.get('/courses', adminMiddleware, (req, res) => {
>>>>>>> c428b9699bf630c5f3d6b445655d9717a893fd4c
    // Implement fetching all courses logic
    let data = await Course.find();
    res.json({courses:data})
});

module.exports = router;