const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,User,Course} = require("../db/index");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username=req.body.username;
    const pass=req.body.password;

    const admin1= new Admin({
        username:username,
        password:pass,
        Courses_id:[]
    })
    admin1.save();
    res.status(200).json({message: 'Admin created successfully'});
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic

    try{
        const course1= new Course(req.body);
        const username=req.headers.username;
        const pass=req.headers.password;
    
        const admin= await Admin.findOne({username,"password": pass});
        course1.save();
        admin.Courses_avl.push(course1);
        admin.save();
        res.status(200).json({"message":'Course created successfully', courseId: course1._id });
    
    }
    catch(err){
        res.status(500).json({"message":"internal server error"});
    }
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses=await Course.find();

        if(courses){
            res.status(200).send(courses);    
        }
        else{
            res.status(404).json({message:"there is not course present"});
            
        }
    }
    catch(err){
        res.status(500).json({message:"internal server error"});
    }


});

module.exports = router;