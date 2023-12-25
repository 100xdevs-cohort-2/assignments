const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");
const jwt = require("jsonwebtoken")
const jwtPassword = "mr_krishna"

router.post('/signup', userMiddleware, async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const user = await User.create({
        username: username,
        password: password,
    });
    res.json({
        msg: "User created successfully",
        user: user.username
    });
});

router.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const token = jwt.sign(
        {
            username: username,
            password: password,
        },
        jwtPassword
    );
    res.json({
        msg: "signed in successfully",
        token: token,
    });
});


router.get('/courses', async (req, res) => {
    const token = req.headers.authorization;
    try {
        jwt.verify(token, jwtPassword);
        await Course.find().then((courses) => {
            res.json(courses);
        });
    } catch (err) {
        res.json({
            msg: "Authorization err",
        });
    }
});

router.post('/courses/:courseId', async (req, res) => {
    const token = req.headers.authorization;
    try {
        jwt.verify(token, jwtPassword);
        const courseId = req.params.courseId;
        const course = await Course.findOneAndUpdate(
            { _id: courseId },
            { $set: { purchased: true } },
            { new: true }
        )
        res.json({
            msg: "Course successfully purchased",
            course: course
        })
    } catch (err) {
        res.json({
            msg: "Authorization err",
        });
    }
});

router.get('/purchasedCourses', async (req, res) => {
    let token = req.headers.authorization;
    try {
        jwt.verify(token, jwtPassword);
        const course = await Course.find({ purchased: true })
        res.json({
            msg: "list of purchased courses",
            courses: course
        })
    } catch (err) {
        res.json({
            msg: "Athorization err",
        });
    }
});

module.exports = router