const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin }=require("../db");
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    console.log(req.body)
    // Implement admin signup logic
    const { username, password } = req.body;
try{
    const signUp=await Admin.create({
    username:username,    //identifies the parameters from db
    password:password
    })
    
    if(signUp){
        res.json({
            msg:"user created successfully"
        })
        console.log(res)
    }
    else{
        res.status(403).json({
            msg:"user not exist"
        })
    }
}
catch(err){
    console.log(err)
}
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
    title:req.body.title
   
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;