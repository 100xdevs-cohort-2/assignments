const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin,Course} = require('../db/index.js')


// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.adminUsername;
    const password = req.body.adminPassword;

    const newAdmin = await new Admin({
        adminUsername : username,
        adminPassword: password
    })
    newAdmin.save()
    res.json({
        msg :'New Admin get added'
    })
});


router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const price = req.body.price
    const imageLink = req.body.imageLink

    const creatingCourse = await new Course({
        title,
        description,
        price,
        imageLink
    })

    creatingCourse.save();
    res.json({
        msg:'Course created successfully',
        id : creatingCourse._id
    })
});



router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const courseinfo = await Course.find({});
    res.json({
        courseinfo
    })

  
});

module.exports = router;