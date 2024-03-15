const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User , Course} = require("../db")

// - POST /users/signup
//   Description: Creates a new user account.
//   Input: { username: 'user', password: 'pass' }
//   Output: { message: 'User created successfully' }

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const{username , password } = req.body;
    await User.create({
        username : username,
        password : password,
        purchasedCourses:[]
    });
    res.json({
        messege : "User created successfully"
    });
});

// - GET /users/courses
//   Description: Lists all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

//getting all courses purchaseed by the user
router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    try{
        const allCourse =await Course.find({});
        res.send(allCourse);
    }catch(err) {
        res.send(err);
    }
});


// - POST /users/courses/:courseId
//   Description: Purchases a course. courseId in the URL path should be replaced with the ID of the course to be purchased.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { message: 'Course purchased successfully' }

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
    const { username, password } = req.headers;
    const courseId = req.params.courseId;
    
    const course = await Course.findOne({
      _id: courseId,
    });
    const user = await User.findOne({ username: username, password: password });
    user.purchasedCourses.push(course);
    await User.updateOne({ username: username, password: password }, user);
    res.json({ message: "Course purchased successfully" });
  });

// - GET /users/purchasedCourses
//   Description: Lists all the courses purchased by the user.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { purchasedCourses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
    const { username, password } = req.headers;
    const user = await User.findOne({ username: username, password: password });
    
    res.json({
      purchasedCourses: user.purchasedCourses,
    });
  });


module.exports = router