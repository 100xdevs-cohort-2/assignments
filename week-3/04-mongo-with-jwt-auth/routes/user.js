const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const jwt = require("jsonwebtoken");
const { User, Course } = require("../db");
const jwtPassword = "givemeahayiaahhaann123@@";


router.use(Router.json());

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic

    const user_name = req.body.username;
    const pass_word = req.body.password;

    const response = await User.create({
        username: user_name,
        password: pass_word
    })

    res.status(200).json({ msg: "User created successfully" });
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const token = jwt.sign({ username: username, password: password }, jwtPassword);

    res.status(200).json({ token: token });

});

router.get('/courses', userMiddleware, async (req, res) => {
    // Implement listing all courses logic
    const respone = await Course.find({});
    res.status(200).json({ courses: respone });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const course_id = req.params.courseId;

    const user_name = req.username;

    const response = await User.updateOne({
        username: user_name
    }, {
        "$push": {
            purchased_courses: course_id
        }
    })

    res.status(200).json({ message: 'Course purchased successfully'});

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user_name = req.username;

    const userDetails = await User.findOne({
        username:user_name
    })

    const response = await Course.find({
        _id:{
            "$in":userDetails.purchased_courses
        }
    })

    res.status(200).json(response);
});

module.exports = router