const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
  // Implement user signup logic
  const { username, password } = req.body;

  try {
    await User.create({ username, password });
    const token = jwt.sign({username, password}, "secret");
    res.status(201).json({ token });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.get("/courses", async (req, res) => {
  // Implement listing all courses logic
  try {
    const courses = await Course.find({});
    res.status(200).json(courses);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const { username, password } = req.user;
    const { courseId } = req.params;
    
    try {
        const course = await Course.findOne({_id: courseId});

        if(!course){
            return res.status(404).send("Course not found");
        }

        const hasCourse = await User.findOne({username, password, purchasedCourses: {$in: courseId}});

        if(hasCourse){
            return res.status(200).json({message: 'You have already purchased this course'});    
        }

        
        await User.findOneAndUpdate({username, password}, {$push: {purchasedCourses: courseId}});
        res.status(200).json({message: 'Course purchased successfully'});
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const { username, password } = req.user;
    try {
        const user = await User.findOne({username, password});
        if(user.purchasedCourses.length === 0){
            return res.status(200).send("You haven't purchased any course");
        }

        const userCoursesIDs = user.purchasedCourses;

        const courses = await Course.find({_id: {$in: userCoursesIDs}})
        
        res.status(200).json(courses);
        
    } catch (error) {
        res.status(400).json({message: error.message});
    }
});

module.exports = router;
