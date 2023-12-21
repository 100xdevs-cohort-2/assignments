const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const {Admin}=require('../db/index')
const {validAuthStructure,getHashedPassword,getToken} = require('../utils/authutils')
const router = Router();

// Admin Routes
router.post('/signup',async (req, res) => {
    try{
        const {username,password}=req.body;
        if(!validAuthStructure(username,password)) throw new Error("invalid username or password structure");

        const hashedPassword=getHashedPassword(password);
        const admin=new Admin({username,hashedPassword});
        await admin.save();

        return res.status(200).json({ message: 'Admin created successfully' });
    }
    catch(e){
        return res.status(400).json({message:e.message});
    }
    
});

router.post('/signin', (req, res) => {
    try{
        const {username,password}=req.body;
        if(!validAuthStructure(username,password)) throw new Error("invalid username or password structure");
        const hashedPassword=getHashedPassword(password);

        const admin=Admin.findOne({username,hashedPassword});
        if(!admin)throw new Error("invalid username or password structure");

        const token=getToken(username,"ADMIN");
        res.status(200).json({token})
    }
    catch(e){
        return res.status(400).json({message:e.message});
    }
    

});

router.post('/courses', adminMiddleware, (req, res) => {
    
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;