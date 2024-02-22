const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, Course } = require("../db/index");

// Admin Routes

let globalId = 0;
router.post("/signup", (req, res) => {
	// Implement admin signup logic

	const username = req.body.username;
	const password = req.body.password;

	if (!username || !password) {
		res.status(404).json({
			msg: "inputs are invalid",
		});
	}
	Admin.create({ username, password })
		.then(() => {
			res.status(200).json({
				message: "Admin created successfully",
			});
		})
		.catch((e) => {
			res.status(404).json({
				msg: e.message,
			});
		});
});

router.post("/courses", adminMiddleware, (req, res) => {
	// Implement course creation logic

	const { title, description, price, imageLink } = req.body;

	Course.create({ title, description, price, imageLink })
		.then(() => {
			res.status(200).json({
				message: "message: 'Course created successfully",
				courseId: globalId++,
			});
		})
		.catch((e) => {
			res.status(404).json({
				msg: e.message,
			});
		});
});

// { "title": "course title", "description": "course description", "price": "100", "imageLink":" https://linktoimage.com" }

router.get("/courses", adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
});

module.exports = router;
