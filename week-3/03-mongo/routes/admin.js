const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const router = Router();


// Admin Routes
app.use(adminMiddleware);
app.use(bodyParser.json());

app.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = Admin.findOne({ username: username });
    if (existingUser) {
        res.status(404).json({
            message: "There is already an account available with this username!"
        })
    }
    else {
        const newAdmin = new Admin({ username: username, password: password });
        newAdmin.save().then(() => {
            res.status(200).json({
                message: "Admin created successfully"
            })
        })
    }


});

app.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;

    const newCourse = new Course({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })

    newCourse.save().then(() => {
        res.status(200).json({
            message: 'Course created successfully',
            courseId: `new course id`
        })
    })
});

app.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    Course.find({}, (err, data) => {
        if (err) {
            res.status(404).json({
                message: "Error Occured"
            })
        } else {
            res.status(200).json({
                data
            })
        }
    })

});

module.exports = router;