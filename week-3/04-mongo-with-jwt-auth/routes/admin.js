const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
<<<<<<< HEAD
const {Admin,Course} =require('../db/index.js');
const jwt =require('jsonwebtoken');


// Admin Routes
function verifyToken(req, res, next) {
    
    const token = req.headers.authorization?.split(' ')[1];
    console.log(token);


    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        console.log('decoded::',decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}


router.post('/signup', async(req, res) => {
  
    try {
    const {username, password} = req.body;
    const newAdmin=new Admin({username,password});
    await newAdmin.save();
    res.status(200).json({ message: 'Admin created successfully' }); 
    const token = jwt.sign({ username: newAdmin.username, userId: newAdmin._id }, process.env.secret_key);

    res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
  
});

router.post('/signin', async(req, res) => {
    try {
    const{username, password} = req.body;
    const admin= await Admin.findOne({username,password});
    if(!admin){
        res.status(401).json({error:'Wrong Credentials'});
    }
    const token = jwt.sign({ username: admin.username, adminId: admin._id }, process.env.secret_key);
    res.json({ token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }

});


router.post('/courses', verifyToken, adminMiddleware, async (req, res) => {
    try {
        // Implement course creation logic
        const { title, description, price, imageLink } = req.body;

        // Create a new course
        const newCourse = new Course({ title, description, price, imageLink });

        // Save the course to the database
        await newCourse.save();

        res.status(201).json({ message: 'Course created successfully', courseId: newCourse._id });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/courses', verifyToken, adminMiddleware, async (req, res) => {
    try {
        // Implement fetching all courses logic
        const courses = await Course.find();

        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
=======

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
>>>>>>> origin/master
});

module.exports = router;