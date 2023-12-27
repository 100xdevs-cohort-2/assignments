const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = User.findOne({ username: username });
    if (existingUser) {
        res.status(404).json({
            message: "There is already one user with this username"
        })
    } else {
        const newUser = new User({
            username: username,
            password: password
        })
        newUser.save().then(() => {
            res.status(200).json({
                message: 'User created successfully'
            })
        })
    }
});

app.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find({}, (err, data) => {
        if (err) {
            res.status(404).json(err);
        } else {
            res.status(200).json(data);
        }
    })
});

app.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const courseExists = Course.findOne({ courseId: courseId });
    if (courseExists) {
        res.status(200).json({
            message: "Course purchased successfully"
        })
    } else {
        res.status(404).json({
            message: "CourseId is invalid"
        })
    }


});

app.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    const user = {
        username: req.headers.username,
        password: req.headers.password
    }
    Course.findOne(uesr).find({}, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "No data found"
            })
        } else {
            res.status(200).json(data)
        }
    })
});
