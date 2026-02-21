const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;
    if(!username || !password){
        return  res.status(400).send("Username or Password missing");
    }
    if(Admin.findOne({username:username})){
        return res.status(400).send("Admin already exists");
    }
    // Save admin to DB
    Admin.create({username: username, password: password})
        .then(() => {
            res.status(201).send("Admin created successfully");
        })
        .catch((err) => {
            res.status(500).send("Error creating admin");
        });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
    Course.create({title: title, description: description, price: price, imageLink: imageLink})
        .then(() => {
            res.status(201).send("Course created successfully");
        })
        .catch((err) => {
            res.status(500).send("Error creating course");
        });
});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courses=await Course.find({});
    res.status(200).send(courses);
});

module.exports = router;