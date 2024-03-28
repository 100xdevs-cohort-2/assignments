const { Admin } = require("../db/index");

// Middleware for handling auth
async function adminMiddleware(req, res, next) {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
	const { username, password } = req.headers;

	const adminData = await Admin.findOne({ username });

	if (adminData) {
		console.log(`admin got authenticated`);
		next();
	} else {
		res.status(401).json({
			message: "you are not authorized",
		});
	}
}

module.exports = adminMiddleware;
