const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
<<<<<<< HEAD
const {Course,User,PurchasedCourse}=require('../db/index')

// User Routes
router.post('/signup', async(req, res) => {
    const {username, password} = req.body;
    const newUser= new User({username,password});
    await newUser.save();
    res.status(200).json({ message: 'User created successfully' });


});

router.get('/courses', async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
        
    }

});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const username = req.headers.username;
        const courseId = req.params.courseId;

        const user = await User.findOne({ username, password: req.headers.password });

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Use findOne to find the course by courseId
        const course = await Course.findOne({ _id: courseId });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }


        const existingPurchase = await PurchasedCourse.findOne({ userId: user._id, courseId });

        if (existingPurchase) {
            return res.status(400).json({ error: 'Course already purchased by the user' });
        }
        const newPurchasedCourse = new PurchasedCourse({
            userId: user._id,
            courseId: course._id,
        });

        await newPurchasedCourse.save();
        res.status(200).json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.error('Error in purchase route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  });


router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    try {
        const user = req.user;
        const purchasedCourses = await PurchasedCourse.find({ userId: user._id }).populate('courseId');
        res.status(200).json({ purchasedCourses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports=router;
=======

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> origin/master
