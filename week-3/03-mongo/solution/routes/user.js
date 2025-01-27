const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    
    const newuser = await User.create(
        {
            username,
            password 
        });
    
    res.status(200).send("User Created Successfully!");
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    res.status(200).json(
        {
            course : courses
        }
    )
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    
    const courseId = req.params.courseId;
    const username = req.headers.username;

    const user = await User.findOne(
        {
            username : username,
            purchasedcourses :{ $in : [courseId]},
        });
        if(user)
        {
            return res.status(400).json(
                {
                    message : "Course has already been bought !"
                });
        }

    await User.updateOne(
        {
            username : username
        },
        {
            $push: {
                purchasedcourses : courseId
            }
        }) 
        return res.json(
            {
                message : "Purchase Complete!"
            });
        

 })

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne(
        {
            username : req.headers.username
        });
        console.log(user.purchasedcourses);
        const courses = await Course.find(
            {
                _id :{
                    "$in" : user.purchasedcourses
                }});
                res.json(
                    {
                        courses : courses
                    })
});

module.exports = router
