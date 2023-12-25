const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../../03-mongo/db");
const { signJwt } = require("../../02-jwt");
const router = Router();

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    await Admin.create(
        {
            username: req.body.username,
            password: req.body.password,
        }
    );
    res.json({ message: 'Admin created successfully' });

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
    let username= req.body.username;
    let password= req.body.password;
    let user = await Admin.findOne({username: username, password:password});
    if(!user){
        res.status(404).json({message:"Wrong credentials"});
    }
    
    let token = signJwt(username, password);
    res.json({ token: token });
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    let data = await Course.create(
        {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            image: req.body.imageLink,
        }
    );
    res.json({ message: 'Course created successfully', courseId: data._id });


});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    let data = await Course.find();
    res.json({courses:data})
});

module.exports = router;