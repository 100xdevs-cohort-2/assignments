const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
       res.json({
        msg:"hi there"

       })     //get the username
    const username= req.body.username;
    const password= req.body.password;
    

    //Check if user with this username already exists
    await Admin.create({
        username: username,
        password: password 
    })
   
        res.json({
            message:" Admin created successfully"
        })

});

router.post('/courses', (req, res) => {
    // Implement course creation logic
    res.json({
        msg:"hi there"

       })
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;