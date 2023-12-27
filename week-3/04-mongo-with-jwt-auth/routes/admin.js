const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index');
const jwt = require('jsonwebtoken');

const AdminSecret = "Admin";
// Admin Routes
router.post('/signup',async (req, res) => {
    // Implement admin signup logic
    try{
        const ExistingUser = await Admin.exists({username:req.headers.username});
    
        if(ExistingUser){
            res.send({msg:"Failed to create Admin, Username Already Exists!"});
        }
        else{
            const {username,password} = req.headers;

            const admin = await Admin.create({username,password});
            
            res.json({
                _id:admin._id,
                message: 'Admin created Successfully!'
            });
        }
    }catch(err){
        res.status(500).json({err});
    }
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    try{
        console.log("Entered");
        const {username,password} = req.headers;
        const admin = await Admin.findOne({username,password});
        console.log(admin);
        if(admin){
            
            token = await jwt.sign({"id":admin._id,"username":username},AdminSecret);
            
            res.json({
                "token": token,
                "message": "Signed in Successfully!!"
            });
        }else{
            res.json({message:"Wrong Credentials!"});
        }
    }catch(err){
        console.log(err);
        res.status(500).json(err);
    }
});

router.post('/courses', adminMiddleware,async (req, res) => {
    // Implement course creation logic
    try{
        const adminId = await Admin.find({_id:req.Admin.id});
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
        res.status(500).json({err});
    }
});

router.get('/courses', adminMiddleware,async (req, res) => {
    // Implement fetching all courses logic
    try{
        const courses = await Course.find();
        console.log(courses);
        res.json(courses);
    }catch(err){
        res.status(500).json({err});
    }
});

module.exports = router;