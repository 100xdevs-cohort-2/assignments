const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User,Course }=require("../db")
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
    try{
    const userSignup=await User.create({
        username:username,
        password:password

    })
    if(userSignup){
        res.json({
            msg:"user created successfully!"
        })
    }
    else{
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }
}catch(err) {
    console.log(err);
    res.status(500).json({
        msg: "Internal Server Error"
    });
    
}
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const getCourse=await Course.find({})   //just list all the courses without any queries
    res.json({
courses:getCourse
    })
});

router.post('/courses/:courseId',  userMiddleware, async(req, res) => {
    // Implement course purchase logic
//logic is that you put the courseId in header to be purchased and add it to the purchased courses arr
const courseId=req.params.courseId
const { username, password } = req.headers;
try{
await User.updateOne({
    username:username,
    password:password
},{
    "$push":{
        purchasedCourses: courseId
    }

})
}catch(error){
    console.log(error)
}
res.json({
    msg:"course purchased successfully"
})
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const user = await User.findOne({ username: req.headers.username });
        if (!user) {
            return res.status(404).json({ msg: 'User not found' });
        }

        const courses = await Course.find({
            _id: { $in: user.purchasedCourses }
        });

        res.json({ courses: courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: 'Internal server error' });
    }
});

module.exports = router