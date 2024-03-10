const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db/index");

// User Routes
router.post("/signup", (req, res) => {
	// Implement user signup logic

	const { username, password } = req.body;
	if (username && password) {
		User.create({ username, password })
			.then((user) => {
				res.status(200).json({
					msg: "user was created successfully",
					details: user.username,
				});
			})
			.catch((e) => {
				res.status(403).json({
					msg: e.message,
				});
			});
	} else {
		res.status(404).json({
			msg: "input is incomplete and might be invalid",
		});
	}
});

router.post("/courses/:courseId", userMiddleware, async (req, res) => {
	// Implement course purchase logic
	const { courseId } = req.params;
	const { username } = req.headers;

	await User.updateOne(
		{
			username,
		},
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

router.get("/courses", (req, res) => {
	// Implement listing all courses logic

	Course.find({})
		.then((courses) => {
			res.status(200).json({
				courses,
			});
		})
		.catch(() => {
			res.status(404).json({
				msg: "courses are not found",
			});
		});
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
	// Implement fetching purchased courses logic

	const { username } = req.headers;

	User.findOne({ username })
		.then((user) => {
			const { purchasedCourses } = user;

			res.status(200).json({
				courses: purchasedCourses,
			});
		})
		.catch((err) => {
			res.status(404).json({
				msg: err.message,
			});
		});
});

module.exports = router;
