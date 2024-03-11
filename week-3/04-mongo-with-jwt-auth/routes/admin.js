const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const models= require("../db/index");
const router = Router();
const  {JWT_SECRET}  = require("../config");
const jwt= require("jsonwebtoken");
// Admin Routes
router.post('/signup', (req, res) => {
    
    // Implement admin signup logic 
    const username=req.body.username;
    const password=req.body.password;
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

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
     const username= req.body.username;
     const password= req.body.password;
     const admin = await models.Admin.findOne({username,password});
     
     if(!admin){
        res.json({
            "message" : "Incorrect Username or Password"
        })
     }
     else{
         const token = jwt.sign({username},JWT_SECRET);
         res.json({
            token
         })
     }
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
    const words = req.headers.authorization.split(" "); 
    const token=words[1];
    const username= jwt.decode(token).username;
    
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
    const words=req.headers.authorization.split(" ");
    const token= words[1];
    const username= jwt.decode(token).username;
    const admin= await models.Admin.findOne({username});
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