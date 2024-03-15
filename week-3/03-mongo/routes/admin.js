const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin , Course } = require("../db")
const router = Router();
// ## Routes
// ### Admin Routes:
// - POST /admin/signup
//   Description: Creates a new admin account.
//   Input Body: { username: 'admin', password: 'pass' }
//   Output: { message: 'Admin created successfully' }

// - POST /admin/courses
//   Description: Creates a new course.
//   Input: Headers: { 'username': 'username', 'password': 'password' }, Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' }
//   Output: { message: 'Course created successfully', courseId: "new course id" }

// - GET /admin/courses
//   Description: Returns all the courses.
//   Input: Headers: { 'username': 'username', 'password': 'password' }
//   Output: { courses: [ { id: 1, title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com', published: true }, ... ] }

// Admin Routes

router.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // Implement admin signup logic
    Admin.create({
        username : username,
        password : password
    });
    res.json({ message : "Admin created successfully"});
});

router.post('/courses', adminMiddleware, (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

     Course.create({
        title : title,
        description : description,
        price : price,
        imageLink : imageLink
    });
    res.json({
        message: 'Course created successfully',
         courseId: "new course id" 
    })
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    try{
        const course =await Course.find({});
        res.json({courses: course});
    }catch(err){
        console.log(err);
        res.status(404).send("Server err occur");
        return;
    }

});

module.exports = router;