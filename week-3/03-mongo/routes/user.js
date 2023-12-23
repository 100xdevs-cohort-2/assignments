const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

const {Course, Purchase, User} = require("../db/index")

// User Routes
router.post('/signup', async(req, res) => {

    await User.create({
        username: req.headers.username,
        password: req.headers.password
    })
    res.json({message: 'User created successfully'});
    // Implement user signup logic
});

router.get('/courses',userMiddleware ,async(req, res) => {

    let allCourses = await Course.find({});
    res.json({courses: allCourses});
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // try{
    //     await Purchase.create({
    //         id: req.params.courseId
    //     })
    //     res.json({message: 'Course Purchase successfully'});
    //     // Implement course purchase logic
    // } catch(e) {
    //     res.json({message: e.message});
    // }
    const { courseId } = req.params;

    try {
        const course = await Course.findById(courseId);
        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }

        const user = await User.findById(req.user._id); // Assuming you have stored the user ID in req.user after authentication
        user.purchasedCourses.push(course);
        await user.save();

        res.json({
            message: 'Course purchased successfully',
            courseId: course._id
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching Purchase courses logic
    try {
        const user = await User.findById(req.user._id).populate('purchasedCourses');
        res.json({ purchasedCourses: user.purchasedCourses });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;