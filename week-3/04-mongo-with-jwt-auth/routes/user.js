const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    let username = req.body.username;
    let password = req.body.password;
    User.create({
        username: username,
        password: password,
    });
    res.json({
        msg: "User created successfully",
    });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    let username = req.body.username;
    let password = req.body.password;
    let token = jwt.sign(
        {
            username: username,
            password: password,
        },
        jwtPassword
    );
    res.json({
        token: token,
    });
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    let token = req.headers.authorization;
    try {
        let decoded = jwt.verify(token, jwtPassword);
        Course.find().then((courses) => {
            res.json(courses);
        });
    } catch (err) {
        res.json({
            msg: "Athurization err",
        });
    }
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    let token = req.headers.authorization;
    try {
        let decoded = jwt.verify(token, jwtPassword);
        let courseId = req.params.courseId;
        Course.findOneAndUpdate(
            {
                courseId: courseId,
            },
            {
                purchased: true,
            }
        );
    } catch (err) {
        res.json({
            msg: "Athorization err",
        });
    }
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    let token = req.headers.authorization;
    try {
        let decoded = jwt.verify(token, jwtPassword);
        Course.find()
            .$where({ purchased: true })
            .then((purchases) => {
                res.json(purchases);
            });
    } catch (err) {
        res.json({
            msg: "Athorization err",
        });
    }
});

module.exports = router