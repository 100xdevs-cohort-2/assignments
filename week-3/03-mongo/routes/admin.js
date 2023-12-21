const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const userAlready = await Admin.findOne({username})

    if (userAlready){
        res.status(400).json({ message: 'Admin created successfully' });
        return;
    }

    const newAdmin = new Admin({username : username,password : password});
    admin.save();
    res.status(200).json({ message: 'Admin created successfully' })
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const {title,description,price,imageLink} = res.body;
    
    const newCourse = new Course({  title : title, description : description, price : price, imageLink : imageLink });
    res.status(200).json({ message: 'Course created successfully', courseId: newCourse._id });    
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let courses = Course.findAll();
    return res.status(200).json(courses);
});

module.exports = router;