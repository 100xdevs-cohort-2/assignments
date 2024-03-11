const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const bcrypt = require('bcrypt');

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    try{
        const {username, password} = req.body;

        if(!username || !password){
            return res.status(400).json({
                success:false,
                message:'Please fill all the details carefully'
            })
        }

        const existingUser = await User.findOne({username});

        if(existingUser){
            return res.status(400).json({
                success : false,
                msg : 'User alredy exists',
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await User.create({
                            username : username,
                            password : hashedPassword
                        });

        return res.status(200).json({
            success : true,
            msg : 'User created successfully',
        });
    }
    catch(err){
        console.error(err);
        return res.status(404).json({
            msg : 'User cregistration failed, Please try again!'
        })
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