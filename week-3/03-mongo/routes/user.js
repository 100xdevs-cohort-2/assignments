const { Admin, User, Course } = require("../db/index");
const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

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
            res.status(409).send("User already exists");
        } else {
            //create the user
            const newUser = new User({ username: username, password: password });
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

router.get('/courses', (req, res) => {
    // Implement fetching all courses logic
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
    const courseId = req.params.courseId;

    User.updateOne({ username: req.headers.username }, { $push: { coursesPurchased: courseId } }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            res.status(200).send("Course purchased successfully");
        }
    });
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    //get the user
    const username = req.headers.username;
    //get the coursesPurchased array
    const coursesPurchased = User.findOne({ username: username }, (err, user) => {
        if (err) {
            console.log(err);
        } else {
            return user.coursesPurchased;
        }
    });
    //get the courses from the courses array
    const courses = Course.find({ _id: { $in: coursesPurchased } }, (err, courses) => {
        if (err) {
            console.log(err);
        } else {
            return courses;
        }
    });
    //send the courses array
    res.status(200).send(courses);
});

module.exports = router;