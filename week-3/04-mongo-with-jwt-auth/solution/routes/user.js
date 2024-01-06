const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");
const { JWT_SECRET } = require("../config");
const jwt = require("jsonwebtoken");

// User Routes
router.post("/signup", async (req, res) => {
	// Check if User already Exists
	let user = await User.findOne({ username: req.body.username });
	if (user)
		return res.status(400).json({ message: "User already registered." });

	// Create New User
	await User.create({
		username: req.body.username,
		password: req.body.password,
	});

	// Return the New User
	res.json({
		message: "User created successfully",
	});
});

router.post("/signin", async (req, res) => {
	// Validate Username
	const user = await User.findOne({ username: req.body.username });
	if (!user)
		return res.status(400).json({
			message: "Incorrect email and pass",
		});

	// Validate Password
	const validPassword = user.password === req.body.password;
	if (!validPassword)
		return res.status(400).json({
			message: "Incorrect email and pass",
		});

	const token = jwt.sign({ username: user.username }, JWT_SECRET);

	res.json({
		token,
	});
});

router.get("/courses", async (req, res) => {
	const response = await Course.find().sort({ title: 1 });
	// Return the courses
	res.json({
		courses: response,
	});
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const courseId = req.params.courseId;
	const username = req.username;

	await User.updateOne(
		{ username: username },
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	);

	res.json({
		message: "Purchase complete!",
	});
});

router.get("/purchasedCourses", userMiddleware, async (req, res) => {
	const user = await User.findOne({
		username: req.username,
	});

	const courses = await Course.find({
		_id: {
			$in: user.purchasedCourses,
		},
	});

	res.json({
		courses: courses,
	});
});

module.exports = router;
