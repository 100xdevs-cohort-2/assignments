const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const models=require("../db/index");
// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
    const username=req.headers.username;
    const password=req.headers.password;
    models.User.findOne({
        username
    }).then((user)=>{
        if(user){
            res.json({
                message : "Username already exist"
            });
            return;
        }
        models.User.create({
            username,
            password,
            purchasedCourses:[]
        });
        res.json({
            message : "User created successfully"
        });
    })
   
});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const courses= await models.Course.find();
    res.json({
        courses
    });
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId= req.params.courseId;
    const course = await models.Course.findOne({id:courseId});
    if(!course){
        res.status(401).json({
            "message" : "Invalid courseId"
        });
        return;
    }
    const username=req.headers.username;
    const user= await models.User.findOne({username});
    user.purchasedCourses.push(courseId);
    const purchasedCourses=user.purchasedCourses;
    await models.User.updateOne({username},{$set:{purchasedCourses}});
    res.json({
        "message" : "Course purchased successfully"
    });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user= await models.User.findOne({username:req.headers.username});
    const purchasedCoursesIds=user.purchasedCourses;
    const purchasedCourses=[];
    for(let i=0;i<purchasedCoursesIds.length;i++){
        const purchasedCourseId=purchasedCoursesIds[i];
        const purchasedCourse=await models.Course.findOne({id:purchasedCourseId});
        purchasedCourses.push(purchasedCourse);
    }
    res.json({purchasedCourses});
});

module.exports = router