const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.body.username;
    const password = req.body.password;

    Admin.find({
        username: username
    }).then(function(response){
        if(response.length > 0){
            res.status(403).json({
                message: "user already exists.",
            })
        }
        else{
            Admin.create({
                username: username,
                password: password
            }).then(function(){
                res.status(200).json({
                    message: "Admin created successfully!"
                })
            })
        }
    })

});

router.post('/signin', (req, res) => {
    // Implement admin signup logic
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;