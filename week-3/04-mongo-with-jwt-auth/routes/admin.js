const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const db = require("../db/index");
const router = Router();
const adminModel = db.Admin;
const courseModel = db.Course;

// Admin Routes
router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/signup', (req, res) => {
    try{
        const admin = new adminModel({
            username:  req.body.username,
            password: req.body.password
        });
        admin.save();
        res.status(200).json({msg: "Admin registered "});
    }
    catch(err){
        res.status(500).json({error: err});
    }

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    try{
        const course = new courseModel({
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink
        });
        course.save();
        res.status(200).json({msg: "Course registered! "});
    }
    catch(err){
        res.status(500).json({error: err});
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
   try{
    const courses = await courseModel.find({});
    console.log("Retrived courses..!");
    res.status(200).json({courses});
   }
   catch(err){
    res.status(500).json({error: err});
   }

});

module.exports = router;