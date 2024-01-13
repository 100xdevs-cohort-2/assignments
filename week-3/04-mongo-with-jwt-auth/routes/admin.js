const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const JWT_SECRET = "your_jwt_secret";
const {Admin, User} = require("../db");

// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
	const {username, password} = req.body;
	Admin.create({username, password});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
	const {username, password} = req.body;
	
	const user = await User.findOne({username, password});

	if(user){
		const token = jwt.sign({username}, JWT_SECRET);
		return res.json({token});
	}
	return res.status(401).json({error: "invalid username or password"});
});

router.post('/courses', adminMiddleware, (req, res) => {
    // Implement course creation logic
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
});

module.exports = router;
