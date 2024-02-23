const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User }=require("../db")
// User Routes
router.post('/signup', async(req, res) => {
    // Implement user signup logic
    const { username, password } = req.headers;
    try{
    const userSignup=await User.create({
        username:username,
        password:password

    })
    if(userSignup){
        res.json({
            msg:"user created successfully!"
        })
    }
    else{
        res.status(403).json({
            msg:"user doesn't exist"
        })
    }
}catch(err) {
    console.log(err);
    res.status(500).json({
        msg: "Internal Server Error"
    });
    
}
});

router.get('/courses', (req, res) => {
    // Implement listing all courses logic
});

router.post('/courses/:courseId', userMiddleware, (req, res) => {
    // Implement course purchase logic
});

router.get('/purchasedCourses', userMiddleware, (req, res) => {
    // Implement fetching purchased courses logic
});

module.exports = router