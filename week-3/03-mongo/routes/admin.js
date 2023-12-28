const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin, Course} = require('../db/index')

// Admin Routes
router.post('/signup', async (req, res) => {
    username = req.body.username
    password = req.body.password
    //console.log(username, password)
    console.log("At Controller")
    try{
        const newItem = new Admin({
            username: username,
            password: password
        })

        await newItem.save()
        console.log("Received Data from DB")
        return res.status(200).json({"message": "Admin created successfully"})
    }
    catch(error){
        console.error('Error adding data:', error);
        return res.status(500).send('Internal Server Error');
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    courseTitle = req.body.title
    description = req.body.description
    price = req.body.price
    imageLink = req.body.imageLink

    const newCourse = new Course({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        imageLink: imageLink = req.body.imageLink
    })

    const savedCourse = await newCourse.save();
    const userInformation = await Admin.findOne({ username: username });
    userInformation.coursesCreated.push(savedCourse._id);
    await userInformation.save();
    res.status(200).json({
        "message": "Course created successfully",
        "courseId": savedCourse._id
    })
})

router.get('/courses', adminMiddleware, async (req, res) => {
    username = req.headers['username']
    try{
        docs = await Admin.findOne({ username: username })
        .populate('coursesCreated')
        .exec()
        res.status(200).json({"courses": docs.coursesCreated})   
    }
    catch(err){
        if(err){
            console.log(err)
            res.status(401).json({
                message: "Internal Server Error"
            })
        }
    }
    
});

module.exports = router;