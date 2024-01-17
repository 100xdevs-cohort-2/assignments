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
    // res.json(typeof allCourses[0]._id);
    res.json({courses: allCourses});
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    let courseId = req.params.courseId;
    try{
        const check = await Course.findById(courseId);
            if(check !== null){
                await Purchase.create({
                    id: courseId
                })
                res.json({message: 'Course Purchase successfully'});
            } else {
                res.json("Course not available");
            }
        // Implement course purchase logic
    } catch(e) {
        res.json({
            message: "input must be a 24 character hex string, 12 byte Uint8Array, or an integer"
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching Purchase courses logic
    try{
        let allCourses = await Purchase.find({});
    res.json({purchasedCourses: allCourses})
    } catch(e){
        res.json(e);
    }
    
});

module.exports = router;