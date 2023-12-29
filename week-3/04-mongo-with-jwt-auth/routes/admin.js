const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Course } = require("../db");
const { Admin } = require("../db");

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    const {user,pass} = req.headers 
    const data = await Admin.find({})
    for(let element of data){
        if(element.username == user){
            return res.status(200).json({message:"Admin name already exists"})
        }
    };
    const obj = new Admin({username : user , password : pass})
    await obj.save()
    res.status(200).json({message:"Admin created successfully"})
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