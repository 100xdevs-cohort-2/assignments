const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin,Course } = require("../db/index");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    
    try{
        const ExistingUser = await Admin.exists({username:req.headers.username});
    
        if(ExistingUser){
            res.send({msg:"Failed to create Admin, Username Already Exists!"});
        }
        else{
            const user = await Admin.create({
                username: req.headers.username,
                password: req.headers.password,
                isAdmin: true
            });
            
            res.send({id:user._id,msg:"user Succesfully created!"});
        }
    }catch(err){
        res.status(500).json(err);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic

    try{
        
        const uname = req.Admin._id;
        const adminId = await Admin.find({username:uname});
        console.log(adminId);
        const course = await Course.create({
            title:req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink,
            published: req.body.published,
            owner: adminId._id
        });
        console.log(course);
        if(course){
            res.send({id:course._id,msg:"Course created Succesfully!"});
        }else{
            res.status(500).json({msg:"Unable to create Course due to internal Server Error!"});
        }
    }catch(err){
        res.status(500).json(err);
    }
    
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find();
    console.log(courses);
    res.json(courses);
});

module.exports = router;