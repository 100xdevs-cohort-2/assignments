const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User,Course} = require("../db/index")


// User Routes
router.post('/signup', async function(req, res) {
   
        const username = req.headers.username
        const password = req.headers.password
        const existingUser = await User.findOne({username:username,password:password}) 
        if(existingUser){
            res.json({
                msg:"login successfull"
            })
        }
        else{
            const newUser = await User.create({username:username,password:password}) 
            if(newUser){
                res.json({
                    msg:"signup successfull"
                })
            }
        }
})

router.get('/courses', userMiddleware,async function(req, res)  {
   const allCourses= await Course.find({})
   return res.json({
    msg:"here are all available courses",
    course:allCourses
   })



});

router.post('/courses/:courseId', userMiddleware, async function(req, res) {
    const username = req.headers.username
    const password = req.headers.password
    const user = await User.findOne({username:username,password:password}) 
const courseId = req.params.courseId
const selectedCourse = await Course.findById(courseId)
const purchasedCourses = await User.findOne({ _id:user._id ,courses:courseId});
if(purchasedCourses){
    return res.json({
        msg:"you can't purchase same course multiple times"
    })
}
if(selectedCourse){
    user.courses.push(selectedCourse)
    await user.save()
    res.json({
        msg:"course purchased successfully"
    
    })
}else{
    res.json({
        msg:"course is not available"
    })
}
});

router.get('/purchasedCourses', userMiddleware, async function(req, res) {
    const username = req.headers.username
    const password = req.headers.password
    const user = await User.findOne({username:username,password:password})
    const courses = await Course.find({ _id: { $in: user.courses } });
    if(courses || courses.length>0){
        return res.json({
            msg:"here is your purchased course",
            courses:courses
        })
    }


});

module.exports = router;