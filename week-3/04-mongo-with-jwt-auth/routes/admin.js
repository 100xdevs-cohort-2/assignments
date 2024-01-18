const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course, User } = require("../db");
const router = Router();
const jwt= require('jsonwebtoken');


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic

    Admin.create({
        username: req.body.username,
        password: req.body.password
    })
    .then((admin)=>{
        res.status(201).json({
            message:'Admin created successfully',
            admin
        })
        })
    .catch((e)=>{
        res.status(500).json({
            message:'Admin creation failed',
            error:e
        
        })
    })    

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic

    const username= req.body.username;
    const password= req.body.password;

    Admin.find({
        username,
        password
    })
    .then((admin)=>{

        console.log(admin);
        const token=jwt.sign({username, password}, 'secret')

        res.json({
            token
        })
        
    })
    .catch((e)=>{
        res.status(401).json({
            message:'incorrect email and pass'
        })
    })




});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic

    Course.create({
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        image: req.body.image
    })
    .then((response)=>{
        res.status(201).json({
            message: 'Course created succesfully'
        })
    })
    .catch((e)=>{
        res.status(500).json({
            message:'Course creation failed',
            error:e
        })
    })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic

    Course.find({})
    .then(function(response){
        res.status(200).json({
           courses: response
        })
    })
});

module.exports = router;