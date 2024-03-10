const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../secretKey");

const { Admin, Course } = require("../db/index");

// Admin Routes
router.post("/signup", (req, res) => {
	// Implement admin signup logic
	const { username, password } = req.body;

	if (username && password) {
		Admin.create({ username, password }).then((user) => {
			res.status(200).json({
				msg: "Admin credentials was created succesfully",
			});
		});
	} else {
		res.status(404).json({
			msg: "invalid inputs",
		});
	}
});

router.post("/signin", async (req, res) => {
	// Implement admin sign-in logic
	const { username, password } = req.body;
	const admin = await Admin.findOne({ username, password });

	if (admin) {
		const jstoken = jwt.sign({ username, password }, SECRET_KEY);
		res.status(200).json({
			output: jstoken,
		});
	}
});

router.post("/courses", adminMiddleware, (req, res) => {
	// Implement course creation logic
	const { title, description, price, imageLink } = req.body;
	Course.create({ title, description, price, imageLink })
		.then(() => res.status(200).json({ msg: "course created successfully" }))
		.catch((e) => res.status(404).json({ msg: e.message }));
});

router.get("/courses", adminMiddleware, async (req, res) => {
	// Implement fetching all courses logic

	const results = await Course.find({});

	if (results) {
		res.status(200).json({ msg: results });
	} else {
		res.status(400).json({ msg: "there is some error happend" });
	}
});

module.exports = router;
