const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {Admin, User, Course} = require("../db/index")

// User Routes
app.post('/signup', async (req, res) => {
    // Implement user signup logic
    const ifexist = await  User.findOne({username: req.headers.username})

    if(ifexist){
        res.status(404).send(new Error("The user is already existed"))
    }
    else{
        const user = new User({
            username: req.headers.username,
            password: req.headers.password
        })

        await user.save()

        res.status(200).send("Successfully created")
    }

});

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const username = req.headers.username
    const password = req.headers.password

    const courses = await Course.findOne({username: username})

    res.send(courses)
});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const course = req.params.courseId

    const username = req.headers.username
    const password = req.headers.password

    const updatedCourse = await User.findOne({
        username: username
    },
    {
        $set: {
            $push:{
                purchasedCourses:{
                    course
                }
            }

        }
    },
    {
        new: true
    }
    ) 

    res.send("the course will add on")

});

app.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const username = req.headers.username

    const user = await User.findOne({username: username})

    res.send(user.purchasedCourses)
});
