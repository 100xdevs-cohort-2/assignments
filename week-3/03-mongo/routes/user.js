const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require('../db/index')

// User Routes
router.post('/signup', async (req, res) => {
    username = req.body.username
    password = req.body.password
    //console.log(username, password)
    try{
        const newItem = new User({
            username: username,
            password: password
        })

        await newItem.save()
        //console.log("Received Data from DB")
        return res.status(200).json({"message": "User created successfully"})
    }
    catch(error){
        console.error('Error adding data:', error);
        return res.status(500).send('Internal Server Error');
    }
});



router.get('/courses', async (req, res) => {
    
    try{
        courseList = await Course.find({})
        //console.log(courseList)
        res.status(200).json({
            "courseList": courseList
        })
    }
    catch(error){
        res.status(401).json({"message": "Internal server error"})
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    courseId = req.params.courseId
    username = req.headers['username']
    try{
        const userInformation = await User.findOne({ username: username });
        userInformation.coursesPurchased.push(courseId);
        await userInformation.save();
        res.status(200).json({ "message": 'Course purchased successfully' })
    }
    catch(error){
        console.log(error)
        res.status(401).json({"message": "Internal server error"})
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    username = req.headers['username']
    try{
        docs = await User.findOne({ username: username })
        .populate('coursesPurchased')
        .exec()
        res.status(200).json({"purchasedCourses": docs.coursesPurchased})   
    }
    catch(err){
        if(err){
            console.log(err)
            res.status(401).json({
                message: "Internal Server Error"
            })
        }
    }
});

module.exports = router