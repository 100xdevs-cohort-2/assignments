const { Router } = require("express");
const { sign } = require("../utils/jwt");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password,
    }).then(() => {
        res.json({ message: "Admin created successfully" });
    });
});

router.post('/signin', async (req, res) => {
    if (await Admin.findOne({ username: req.headers.username, password: req.headers.password }))
        return res.json({ token: sign({ username: req.headers.username }) });
    res.sendStatus(401);
});

router.post('/courses', adminMiddleware, (req, res) => {
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    }).then((course) => {
        res.json({ message: 'Course created successfully', courseId: course.id });
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    res.json(await Course.find({}));
});

module.exports = router;