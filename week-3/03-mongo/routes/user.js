const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { Admin, User, Course} = require("../db/index")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{
        const user = await User
            .create({
                username : req.headers.username,
                password : req.headers.password
            });
        res.status(200).json(user);
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    Course
        .find()
        .then((courses) => (res.status(200).send(courses)));
});

<<<<<<< HEAD
router.post('/courses/:courseId', userMiddleware, (req, res) => {
=======
router.post('/courses/:courseId', userMiddleware, async (req, res) => {
>>>>>>> 1bcf07e (w3 assignment solved)
    // Implement course purchase logic
    let course = await Course.findOne({_id : req.params.courseId});
    
    User
        .findOneAndUpdate({
            username : req.headers.username,
            password : req.headers.password          
            },
            {
                $push: { 
                    courses : course 
                }
            },
            { new: true }
        );

    res.status(200).send("Course purchases successfully"); 
        

});

<<<<<<< HEAD
router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
=======
router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({
            username: req.headers.username,
        });
        await user.populate("courses");
        res.json({ courses: user.courses });
    } 
    catch (error) {
        res.json({ error: error.message });
    }
  });
module.exports = router;
>>>>>>> 1bcf07e (w3 assignment solved)
