const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require("../db")
const {JWT_SECRET}=require("../config")
const jwt=require("jsonwebtoken")
// Admin Routes
router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const { username, password } = req.headers;
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
    catch (err) {
        console.log(err);
        res.status(500).json({
            msg: "Internal Server Error"
        });
        
    } 
});

router.post('/signin', async (req, res) => {
    const { username, password } = req.body;

    try {
        const adminSignIn = await Admin.findOne({ username, password });
console.log(adminSignIn)
        // if (!adminSignIn) {
        //     return res.status(401).json({ message: 'Invalid username or password' });
        // }
        console.log("secret",JWT_SECRET)
        const token = jwt.sign({ username: adminSignIn.username }, JWT_SECRET);
        
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    
    try{
    const title=req.body.title
    const description=req.body.description
    const price=req.body.price
   const  imageLink=req.body.imageLink
    const adminCourse=await Admin.create({
        title,
        description,
        price,
        imageLink
    })
    res.json({
        msg:"course created successfully",
        courseId:adminCourse._id
    })
}
catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
}
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;