const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
app.post('/user/signup', (req, res) => {
    // Implement user signup logic
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.json({
        message: "User created successfully"
    })
});

app.post('/user/signin', (req, res) => {
    // Implement admin signup logic
    User.create({
        username: req.body.username,
        password: req.body.password,
    })
    res.json({
        token: jwt.sign({
            username: req.body.username,
            password: req.body.password,
        }, jwtPassword)
    })
});

app.get('/user/courses', (req, res) => {
    // Implement listing all courses logic
    Course.find().then((data) => {
        res.json(data);
    })
});

app.post('/user/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
    Course.find({ _id: req.params.courseId }).then((data) => {
        Purchase.create({

            token: req.body.authorization,
            arrayOfObjects: data,
        })
    })
    res.json({
        message: "Course purchased successfully"
    })

})

app.get('/user/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
    Purchase.find({ token: req.body.authorization }).then((data) => {
        res.json(data);
    })
});