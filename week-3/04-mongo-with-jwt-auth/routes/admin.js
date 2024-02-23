const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const {Admin}=require("../db")
const secret=require("../index")
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

        if (!adminSignIn) {
            return res.status(401).json({ message: 'Invalid username or password' });
        }

        const token = jwt.sign({ username }, secret);
        res.json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;