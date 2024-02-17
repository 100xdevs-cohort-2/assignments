const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course} = require("../db/index")

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.body.username;
    const password = req.body.password;

    let userExists = await User.findOne({username: username});

    if(userExists)
    {
        return res.status(400).json({msg: "User already exists"});
    }

    const newUser = new User({
        username: username,
        password: password,
    })

    newUser.save();
    res.json({msg: 'User Created Successfully'});
});

router.post('/signin', async (req, res) => {
    // Implement user signin logic
    const username = req.body.username;
    const password = req.body.password;

    let userExists = await User.findOne({username: username});

    if(!userExists)
    {
        return res.status(401).json({msg: "User doesn't exist."});
    }

    if(adminExists.password !== password)
    {
        return res.status(401).json({msg: "Invalid Credentials."});
    }


    const token = jwt.sign({username: username}, "secret");

    res.json({token: token});

});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find().select('-__v -_id');
    return res.json({courses: courses});
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic
    const tokenString = req.headers.Authorization;
    const matchResult = tokenString.match(/^Bearer\s(.+)$/);

    const username = jwt.decode(matchResult[1]).username;

    const user = User.updateOne({username: username},
        {
            "$push": {
                purchasedCourses: courseId
            }
        });

    res.json({ message: 'Course purchased successfully' });
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const tokenString = req.headers.Authorization;
    const matchResult = tokenString.match(/^Bearer\s(.+)$/);

    const username = jwt.decode(matchResult[1]).username;

    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    })

    res.json({purchasedCourses: courses});

});

module.exports = router