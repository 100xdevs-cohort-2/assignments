const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
<<<<<<< HEAD
const {User,Course,PurchasedCourse} =require('../db/index');
const jwt =require('jsonwebtoken');
// User Routes
function verifyToken(req, res, next) {
    const token = req.headers.authorization?.split(' ')[1]; 

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' });
    }

    try {
        const decoded = jwt.verify(token, process.env.secret_key);
        console.log(decoded);
        req.user = decoded;
        next();
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Invalid token' });
    }
}

router.post('/signup', async(req, res) => {
    try {
        const {username, password}=req.body;
        const existingUser=User.findOne({username});
        if(existingUser){
            res.status(400).json({message:'Already have a account'});
        }
        
            const newUser=User.create({username,password});
            await newUser.save();
            const token = jwt.sign({ userId: newUser._id, username: newUser.username }, process.env.secret_key);

            res.status(201).json({ message: 'User created successfully', token });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:'Internal Server Error'});
    }
   
    
});

router.post('/signin', async(req, res) => {
    try {
        const{username, password} = req.body;
        const user= await User.findOne({username,password});
        if(!user){
            res.status(401).json({error:'Wrong Credentials'});
        }
        const token = jwt.sign({ username:  user.username, userId: user._id }, process.env.secret_key);
        res.json({ token });
            
        } catch (error) {
            console.log(error);
            res.status(500).json({error:'Internal Server Error'});
        }
    
});

router.get('/courses', async(req, res) => {
    try {
        const courses = await Course.find();
        res.status(200).json({ courses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.post('/courses/:courseId',verifyToken, userMiddleware, async(req, res) => {
    try {
        const username = req.user.username;
        const courseId = req.params.courseId;

        const user = await User.findOne({ username});

        if (!user) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        // Use findOne to find the course by courseId
        const course = await Course.findOne({ _id: courseId });

        if (!course) {
            return res.status(404).json({ error: 'Course not found' });
        }


        const existingPurchase = await PurchasedCourse.findOne({ userId: user._id, courseId });

        if (existingPurchase) {
            return res.status(400).json({ error: 'Course already purchased by the user' });
        }
        const newPurchasedCourse = new PurchasedCourse({
            userId: user._id,
            courseId: course._id,
        });

        await newPurchasedCourse.save();
        res.status(200).json({ message: 'Course purchased successfully' });
    } catch (error) {
        console.error('Error in purchase route:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

router.get('/purchasedCourses',verifyToken, userMiddleware, async(req, res) => {
    try {
        const user = req.user;
        const purchasedCourses = await PurchasedCourse.find({ userId: user._id }).populate('courseId');
        res.status(200).json({ purchasedCourses });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

module.exports = router;
=======

// User Routes
router.post('/signup', (req, res) => {
    // Implement user signup logic
});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router
>>>>>>> origin/master
