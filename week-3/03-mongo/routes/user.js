const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, UserCourseMap} = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    //check if the user exists in the db
    const username = req.body.username;
    const password = req.body.password;

    const userExists = await User.findOne({username: username}).exec();

    if(userExists) {
        res.status(409).send("User already exists!");
        return;
    }

    const user = new User({
        username,
        password
    })

    try {
        user.save();
    } catch (err) {
        res.status(500).send('Internal server error! Unable to create a user!');
        return;
    }

    res.status(200).json({
        message:"USer created successfully!"
    })
});

router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find({});
    res.status(200).json({courses: courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    const courseId = req.params.courseId;

    const isPurchased = await UserCourseMap.find({
        username: username,
        courseId: courseId,
        status: "ACTIVE"
    }).exec()

    if(isPurchased.length) {
        res.status(200).send("Course is already purchased by the user!");
        return;
    }

    const courseUserMapping = new UserCourseMap({
        username: username,
        courseId: courseId,
        purchaseData: new Date(),
        status:"ACTIVE"
    })

    try {
        courseUserMapping.save()
    } catch(err) {
        res.status(500).send("Unable to purchase course for the given user!");
        return;
    }

    res.status(200).json({
        message:"Course purchased successfully!"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const username = req.headers.username;
    let purchasedCourseIds = [];
    const courseIdsPurchased = await UserCourseMap.find({
        username: username
    }).exec();

    if(!courseIdsPurchased) {
        res.status(400).json({
            message:"No course purchased by the user yet!",
            courses:[]
        })
        return;
    }

    purchasedCourseIds = courseIdsPurchased.map(data => {
        return data.courseId
    })
    
    const purchasedCourses = await Course.find().where('courseId').in(purchasedCourseIds);

    if(!purchasedCourses) {
        res.status(500).json({
            message:"Internal server error!"
        })
        return;
    }

    res.status(200).json({
        purchasedCourses: purchasedCourses
    })

});

module.exports = router