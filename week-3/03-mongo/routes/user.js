const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    const username = req.headers.username;
    const password = req.headers.password;

    User.create({
        username,
        password
    }).then(()=>{
        res.status(200).json({
            msg:"User created successfully"
        })
    }).catch((e)=>{
        res.status(500).send('internal error')
    })
});

router.get('/courses', async (req, res) => {
    const courses = await Course.find({});

    res.status(200).json({
        courses
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    const courseId = req.params.courseId;
    const username = req.headers.username;

  await  User.updateOne(({
        username
    },{
        $push:{
            purchasedCourses: courseId
        }}))

    res.json({
        msg: "Course purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    const user =  await User.findOne({
        username :req.headers.username
    })


    const coursesPurchased = await Course.find({
        _id:{
            "$in" : user.purchasedCourses
        }
    });

    res.json({
        coursesPurchased
    })
});

module.exports = router