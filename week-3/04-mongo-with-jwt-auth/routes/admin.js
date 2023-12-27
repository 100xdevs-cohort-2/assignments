const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();

//
const jwt = require("jsonwebtoken");
const jwtPassword = "secret";


// Admin Routes
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json({ message: 'Admin created successfully' });
    res.status(200).json({
        token: jwt.sign({
            username: req.body.username,
            password: req.body.password
        }, jwtPassword)
    })
});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    res.status(200).json({
        token: json.sign({
            username: req.body.username,
            password: req.body.password
        }, jwtPassword)
    })
});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.Create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image

    })
    res.json({
        message: "Course created successfully",
        courseId: Course.findOne({ title: req.body.title }._id)
    })
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find().then((data) => {
        res.json(data);
    })
});

module.exports = router;