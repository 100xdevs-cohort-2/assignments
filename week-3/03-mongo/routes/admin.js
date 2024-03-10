const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require('../db/index')
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {

    const { username, password } = req.headers

    try{
        await Admin.create( {
            username: username,
            password:password
        })

        res.status(200).json({ 'message' : 'Admin created successfully'})
    }

    catch(err){
        res.status(403).json({'message' : 'Admin Not Created Error'})
    }
    
});

router.post('/courses', adminMiddleware, async (req, res) => {
    const {title, description, price, imageLink} = req.body

    try {
        const newCourse = await Course.create( {
            title: title,
            description : description,
            price: price,
            imageLink : imageLink
        })
        console.log(newCourse)

        res.status(200).json({
            message : 'Course created successfully',
            courseId : newCourse._id
        })

    }
    catch(err){
        console.log(err)
        res.status(403).json({"message" : "Course creation failed "})
    }

});

router.get('/courses', adminMiddleware, async (req, res) => {

    const response = await Course.find({})

    res.json({
        courses : response
    })

    res.status(200).json({

    })
});

module.exports = router;