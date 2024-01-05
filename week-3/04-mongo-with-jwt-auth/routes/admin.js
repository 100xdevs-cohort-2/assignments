const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index.js");
const jwt = require('jsonwebtoken');
require('dotenv').config();
const jwtPassword = process.env.jwtPassword;

// Admin Routes
router.post('/signup', (req, res) => {
    Admin.create({
        username: req.body.username,
        password: req.body.password
    });
    res.json({
        message: "Admin created Successfully"
    });
});

router.post('/signin', async (req, res) => {
    const user = await Admin.findOne({username: req.headers.username});
    if(user){
        if(user.password == req.headers.password){
            const token = jwt.sign({username: user.username}, jwtPassword);
            res.json({token: token});
        } else {
            res.json({message: "Incorrect password"});
        }
    } else {
        res.json({message: "username not found"});
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: req.body.imageLink,
    })
    res.json({ message: 'Course created successfully'});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    courses = await Course.find({});
    res.send(courses);
});

module.exports = router;