const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();
const bcrypt = require('bcrypt');

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    try{
        //get data
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully'
            })
        }
        
        //check if already exists or not
        const existingUser = await Admin.findOne({username});

        if(existingUser){
            return res.status(400).json({
                success: false,
                message : 'Admin already exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newAdmin = await Admin.create({
                                username : username,
                                password : hashedPassword
                            });

        return res.status(200).json("Admin registered successfully");
    }
    catch(err){
        console.error(err);
        return res.status(404).json({
            success: false,
            msg : 'Admin registration failed, try again'
        });
    }
   
});

router.post('/courses', adminMiddleware, async(req, res) => {
    // Implement course creation logic
    try{
        const {title, description, price, image} = req.body;

        const newCourse = await Course.create({
            title,
            description,
            price,
            image,
        });

        res.status(200).json('Course created sucessfully');
    }
    catch(err){
        console.error(err);
        return res.status(404).json({
            success : false,
            msg : 'Course creation failed!'
        });
    }
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then(response => response.json()).then(data =>
        {res.json(data)}
    )
});

module.exports = router;