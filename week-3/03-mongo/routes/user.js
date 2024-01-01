const { Router } = require("express");
const userMiddleware = require("../middleware/user");
const router = Router();

const { User } = require("../db/")

// User Routes
router.post('/signup', async(req, res) => {
    console.log(req.headers)
    // Implement user signup logic
    let username = req.headers.username
    let password = req.headers.password

    try{
        let isUser = await User.create({
            username: username,
            // email: email,
            password: password
        })
        if(isUser){
            res.status(200).json({
                Msg: "User created successfully"
            })
        }else{
            res.status(404).json({
                Error: "Unable to create user."
            })
        }
    }catch (err){
        console.log(err)
    }

});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
    res.send(200).json({
        OK: "All ok here"
    })
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router