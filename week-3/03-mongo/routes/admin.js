const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course } = require("../db/index");

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

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    const published = req.body.published;

    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink,
        published: published
    });

    await newCourse.save((err, course) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send({ message: "Course created successfully", courseId: course._id });
        }
    });
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement course fetching logic
    await Course.find({}, (err, courses) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(courses);
        }
    });
});

module.exports = router;