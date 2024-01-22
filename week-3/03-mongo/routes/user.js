const { Router } = require("express");
const { User , Course} = require("../db/index")
const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username : username,
        password : password
    })
    res.status(200).json({
        message : "User created successfully"
    })

});

router.get('/courses', async(req, res) => {
    // Implement listing all courses logic
    const username = req.headers.username; 
    const password = req.headers.password;
    const checkUser = await User.findOne({
        username,
        password
    })
    if(checkUser){
        Course.find({})
        .then(function(response){
            res.json({
                courses : response
            })
        })
    }
    else{
        res.status(403).json({
            message : "User not found in the database !!"
        })
    }
});

router.post('/courses/:courseId', userMiddleware, async(req, res) => {
    // Implement course purchase logic
    const courseId = req.params.courseId;
    const username = req.headers.username;

    try {
        await User.updateOne({
            username : username
        } , {
            "$push" : {
                purchasedCourses : courseId
            }
        });
        res.json({
            message : "Purchase completed !"
        });
    } catch (error) {
        res.status(500).json({
            message: "An error occurred while purchasing the course.",
            error: error.message
        });
    }
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = await User.findOne({
        username : req.headers.username
    })
    console.log(user.purchasedCourses);
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    })
});

module.exports = router