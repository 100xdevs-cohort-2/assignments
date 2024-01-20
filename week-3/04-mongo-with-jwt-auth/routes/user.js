const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../../03-mongo/db");
const jwt = require("jsonwebtoken");
const { Course } = require("../solution/db");
const jwtSecret = "jwtpassword"

// User Routes
router.post('/signup',async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;
    try {
        const existingUser =  User.findOne({
            username,
            password
        })
        if (!existingUser) {
            return res.json({
                msg: "User already exists!"
            })
        } else {
            const newUser = new User({
                username,
                password
            })
            await newUser.save();
            return res.json({
                msg: "User signed Up Succesfully!",
            })
        }
    } catch(error) {
        res.json({
            msg: "Internall sever problem!"
        })
    }
});

router.post('/signin', async(req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    try{
        const UserExist = await User.findOne({
        username,
        password
    })
    if (!UserExist) {
        return res.json("User Does not Exist!");
    } else {
        token = jwt.sign({username,password},jwtSecret)
        return res.json({
            token: token
        })
    }
    } catch(error) {
        return res.json({
            msg: "Internal Server Error!",
        })
    }
 });

router.get('/courses',async (req, res) => {
    // Implement listing all courses logic
    //this route returns all courses available
    try {
        //.find() method to search the courses.and this method return a promise
        const course = Course.find({});
        //course is the resolved result of the Promise
        res.json({
            course,
        })
    } catch (error) { //handle error if the promise is rejected

        res.status(500).json({
            msg: "Interval server Error!",
        })

    }
});

router.post('/courses/:courseId', userMiddleware,async (req, res) => {
    // Implement course purchase logic
    // This route returns the current course purchased by the User
    // Here, we dont take the username from the headers. This is because there might be a situation where the Authorization token is of user1 but the username is of user2
    // to Avoid this Security issue, the username is picked up from the UserMiddleware itself and is stored in the req object.
    // .updateOne() is used, which takes two arguments.
    // first one is filter Criteria
    // second is Update Object
    const user = await User.updateOne({
        username: req.username,
    },
    {
        $push: {
            purchasedCourses: req.params.courseId,
        }
    });
    return res.status(200).json({
        msg: "Course Purchased successfully"
    })
});

router.get('/purchasedCourses', userMiddleware, async(req, res) => {
    // Implement fetching purchased courses logic
    // this route returns all the courses purchased by the User.
    // Here, we dont take username from the headers. this is because there might be a situation where the authorization token is of user1 but the username is of user2.
    // To avoid the security issue, The username is picked up from the userMiddleware itself and is stored in the req object.
    const user = await User.findOne({
        username: req.username,
    });
    const courses = await Course.find({
        _id: {
            $in: user.purchasedCourses,
        }
    });
    // Check if the user has purchased any course.
    if (!courses) {
        //if not purchased, send the error response.
        return res.status(500).json({
            msg: "No course found!",
        })
    } else {
        return res.status(200).json({
            courses: courses,
        })
    }
});

module.exports = router