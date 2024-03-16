const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic

    const username = req.body.username;
    const password = req.body.password;

    //check if username already exists
    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (user) {
            res.status(400).send("Username already exists");
        } else {
            const newUser = new User({
                username: username,
                password: password
            });

            newUser.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send("User created successfully");
                }
            });
        }
    });

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.status(400).send("User not found");
        } else {
            if (user.password === password) {
                const token = jwt.sign({ username: user.username }, 'secret');
                res.status(200).send({ message: "User logged in successfully", token: token });

            } else {
                res.status(400).send("Incorrect password");
            }
        }
    });


});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}, (err, courses) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send(courses);
        }
    });

});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic

    const username = req.username;
    const courseId = req.params.courseId;

    User.Course.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.status(400).send("User not found");
        } else {
            user.coursesPurchased.push(courseId);
            user.save((err, user) => {
                if (err) {
                    console.log(err);
                } else {
                    res.status(200).send("Course purchased successfully");
                }
            });
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.username;

    User.Course.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else if (!user) {
            res.status(400).send("User not found");
        } else {
            res.status(200).send(user.coursesPurchased);
        }
    });
});

module.exports = router