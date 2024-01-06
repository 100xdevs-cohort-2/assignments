const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const models=require("../db/index");
const { model } = require("mongoose");
// Admin Routes
router.post('/signup', (req, res) => {
    
    // Implement admin signup logic 
    const username=req.headers.username;
    const password=req.headers.password;
    models.Admin.findOne({
        username
    }).then((admin)=>{
        if(admin){
            res.json({
                message : "Username already exist"
            });
            return;
        }
        models.Admin.create({
            username,
            password,
            publishedCourses:[]
        });
        res.json({
            message : "Admin created successfully"
        });
    })
   
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const id= Math.round(Math.random()*1000000);
    const title=req.body.title;
    const description=req.body.description;
    const price=req.body.price;
    const imageLink=req.body.imageLink;
    const published= true;
    await models.Course.create({
        id,
        title,
        description,
        price,
        imageLink,
        published
    });
    const username=req.headers.username;
    
    const admin= await models.Admin.findOne({
        username
    });
    
    const publishedCourses=admin.publishedCourses;
    publishedCourses.push(id);
    const filter = { username: username };
    const update = { $set: { publishedCourses: publishedCourses } };
    
    await models.Admin.updateOne(filter,update);
    
    res.json({
        message : "Course created successfully",
        courseId: id
    });


});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const admin= await models.Admin.findOne({username:req.headers.username});
    const publishedCoursesIds=admin.publishedCourses;
    const publishedCourses=[];
    for(let i=0;i<publishedCoursesIds.length;i++){
        const publishedCourseId=publishedCoursesIds[i];
        const publishedCourse=await models.Course.findOne({id:publishedCourseId});
        publishedCourses.push(publishedCourse);
    }
    res.json({publishedCourses});

});

module.exports = router;