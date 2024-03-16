const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");
const jwt = require('jsonwebtoken');

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    const username = req.body.username;
    const password = req.body.password;

    //check if username already exists

    Admin.findOne({ username: username }, (err, admin) => {
        if (err) {
            console.log(err);
        } else if (admin) {
            res.status(400).send("Username already exists");
        } else {
            const newAdmin = new Admin({
                username: username,
                password: password
            });

            newAdmin.save((err, admin) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send("Admin created successfully");
                }
            });
        }
    });


});

router.post('/signin', (req, res) => {
    // Implement admin signin logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.findOne({ username: username }, (err, admin) => {
        if (err) {
            console.log(err);
        } else if (!admin) {
            res.status(400).send("Admin not found");
        } else {
            if (admin.password === password) {
                const token = jwt.sign({ username: admin.username }, 'secret');
                res.status(200).send({ message: "Admin logged in successfully", token: token });

            } else {
                res.status(400).send("Incorrect password");
            }
        }
    });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newCourse = new Course({
        title: title,
        description: description,
        imageLink: imageLink,
        price: price
    });

    newCourse.save((err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({ message: "Course created successfully", courseId: course._id });
        }
    });
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}, (err, courses) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(courses);
        }
    });
});

module.exports = router;