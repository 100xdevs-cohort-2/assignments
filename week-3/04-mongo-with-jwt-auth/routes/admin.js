const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin , Course} = require("../db");
const router = Router();
const jwt = require('jsonwebtoken')
const jwtpassword = '123123'

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const newAdmin = {
        username: req.body.username,
        password: req.body.password
    }
    const admin = await Admin.findOne(newAdmin)
    if (admin) {
        res.status(400).json({ msg: "!user already exist" })
    } else {
        Admin.create(newAdmin)
        res.status(200).json({ msg: "Admin Created" })
    }

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const admin = req.body.username;
    const pass = req.body.password;

    if (!admin || !pass) {
        return res.status(401).json({ error: 'Username or password missing' });
    }

    try {
        const findAdmin = await Admin.findOne({ username: admin, password: pass });

        if (findAdmin?.username === admin) {    // findAdmin && findAdmin.username === admin
            const token = jwt.sign({ username: admin, password: pass }, jwtpassword);
            findAdmin.authenticationToken = token;
            await findAdmin.save();
            res.status(200).json({ signintoken: findAdmin.authenticationToken });
        } else {
            res.status(401).json({ msg: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal error' });
    }
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try {
        const courses = {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.image
        }
        const newCourse = await Course.create(courses);
        res.json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (err) {
        res.status(404).json({ err: "internal error" })
    }
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    try {
        const all = await Course.find();
        res.status(200).json(all)
    }
    catch (err) {
        res.status(400).json({ message: "courses not found" });
    }
});

module.exports = router;