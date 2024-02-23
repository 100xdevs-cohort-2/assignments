const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { SECRET_KEY } = require("../secretKey");
const jwt = require("jsonwebtoken");

const { User, Course } = require("../db/index");
// User Routes
router.post("/signup", (req, res) => {
	// Implement user signup logic

	const { username, password } = req.body;

	User.create({ username, password });

	res.status(200).json({
		msg: "user created succesfully",
	});
});

router.post("/signin", async (req, res) => {
	// Implement admin signup logic

	const { username, password } = req.body;
	const user = await User.findOne({ username, password });

	if (user) {
		const jstoken = jwt.sign({ username, password }, SECRET_KEY);
		res.status(200).json({
			output: jstoken,
		});
	}
});

router.get("/courses", async (req, res) => {
	// Implement listing all courses logic
	const allCoursesListed = await Course.find({});
	res.status(200).json({
		courses: allCoursesListed,
	});
});

router.post("/courses/:courseId", userMiddleware, (req, res) => {
	// Implement course purchase logic
	const username = req.extractedUsername;
	const { courseId } = req.params;

	User.findOneAndUpdate(
		{ username },
		{
			$push: {
				purchasedCourses: courseId,
			},
		}
	)
		.then(() => {
			res.status(200).json({
				msg: "course was pruchased succesfully",
			});
		})
		.catch((err) => res.status(404).json({ msg: err.message }));
});

router.get("/purchasedCourses", userMiddleware, (req, res) => {
	// Implement fetching purchased courses logic

	const username = req.extractedUsername;

	User.findOne({ username })
		.then((user) => {
			res.status(200).json({ purchasedCourses: user.purchasedCourses });
		})
		.catch((err) => res.status(404).json({ msg: err.message }));
});

module.exports = router;
