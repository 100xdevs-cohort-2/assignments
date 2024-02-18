const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin, Course} = require("../db")
const router = Router();


// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    Admin.create({
        username :  req.body.username,
        password : req.body.password
        })    
        res.json({
            message: 'Admin created successfully'
        })
//    const username = req.body.username;
//    const password = req.body.password;
   
//    const userAlready = await Admin.findOne({username})

//    if(userAlready){
//     res.status(400).json({message: "Admin created Successfully"})
//     return
//    }

//    const newAdmin = new Admin({username: username, password: password})
//    Admin.save();
//    res.status(200).json({message : 'Admin Created Successfully'})

});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
     })

// const {title,description,price,imageLink} = req.body
// const newCourse = new Course({title:title, description : description, price : price, imageLink : imageLink})
return res.status(200).json({message: 'Course created successfullly '})

});

router.get('/courses', adminMiddleware, async(req, res) => {
    // Implement fetching all courses logic
    const list = await Course.find()
    return res.status(200).json(list)
});

module.exports = router;