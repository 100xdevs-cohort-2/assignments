const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        msg : 'User created successfully'
    })
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const response = await Course.find();
    res.json({
        courses : response
    })
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;
    try{
        const courses = await Course.find({ _id : courseId});
    
        if(courses.length == 0){
            res.status(404).json({msg : 'send valid course ID'})
        }
        else{ 
            try{
                await User.updateOne({
                    username : username
                },{
                    "$push" :{
                        purchasedCourse : courseId
                    }
                });
                res.json({msg : "Purchase Complete"});
            }
            catch(e){
                // console.log(e);
                res.json({msg : "there is some error"});
            }
        }
    }catch(e){
        console.log("error in finding course")
        res.json({msg : "error in finding course ID"})
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    try{
        const courseIds = await User.findOne({username : req.headers.username} , {purchasedCourse : 1 , _id : 0})
        // console.log("hello");
        const courses = await Course.find({_id : { "$in" : courseIds.purchasedCourse}}) // use courseIds[0].purchasedCourse if earlier use find function to find courseIds
        res.json({
            purchasedCourses : courses
        })
    }
    catch(e){
        res.json("there is some error here");
    }
});

module.exports = router