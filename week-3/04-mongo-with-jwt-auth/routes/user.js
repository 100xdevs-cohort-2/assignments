const { Admin, User, Course } = require('../db/index.js');
const { Router } = require("express");
const jwt = require('jsonwebtoken');
const router = Router();
const userMiddleware = require("../middleware/user");
const jwtpassword = '123123';

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const newUser = {
        username: req.body.username,
        password: req.body.password
    }
    const user = await User.findOne(newUser);
    if (user) {
        res.status(401).json({ msg: 'user already exist' })
    }
    else {
        User.create(newUser);
        res.status(200).json({ msg: "User created succesfully" });
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const user = req.body.username;
    const pass = req.body.password;

    if (!user || !pass) {
        return res.status(401).json({ error: 'Username or password missing' });
    }

    try {
        const findUser = await User.findOne({ username: user, password: pass });

        if (findUser?.username === user) {
            const token = jwt.sign({ username: user, password: pass }, jwtpassword);
            findUser.authenticationToken = token;
            await findUser.save();
            res.status(200).json({ signintoken: findUser.authenticationToken });
        } else {
            res.status(401).json({ msg: 'User not found' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal error' });
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try {
        const all = await Course.find();
        res.status(200).json(all)
    } catch (err) {
        res.status(400).json({ message: "courses not found" });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        // Implement course purchase logic
        const user = req.user;
        const id = req.params.courseId;

        const course = await Course.findById(id);

        if (course) {
            const foundUser = await User.findOne({ username: user });

            if (foundUser) {
                foundUser.purchasedCourse.push(course);
                await foundUser.save();
                res.status(200).json({ message: 'Course purchased successfully' });
            } else {
                res.status(401).json({ message: 'User not found' });
            }
        } else {
            res.status(401).json({ message: 'Course not found' });
        }
    } catch (err) {
        if (err.name === 'InternalError') {
            res.status(500).json({ err: 'Internal server error' });
        } else {
            res.status(500).json({ err: 'Unknown error' });
        }
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = req.user;
    try {
        const foundUser = await User.findOne({ username: user });
        if (!foundUser.purchasedCourse.length) {
            res.status(401).json({ msg: "no course found" });
        }

        res.status(200).json({ purchasedCourse: foundUser.purchasedCourse });
    }
    catch (err) {
        res.status(404).json({ err: "internal server error" })
    }
});

module.exports = router