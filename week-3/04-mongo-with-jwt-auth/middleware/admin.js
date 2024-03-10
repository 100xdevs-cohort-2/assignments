// Middleware for handling auth
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../secretKey");

function adminMiddleware(req, res, next) {
	// Implement admin auth logic
	// You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected

	const words = req.headers.authorization;
	const jsonToken = words.split(" ")[1];

	const decoded = jwt.verify(jsonToken, SECRET_KEY);

	if (decoded.username) {
		req.extractedUsername = decoded.username;
		next();
	} else {
		res.status(404).json({
			msg: "invalid credentials",
		});
	}
}

module.exports = adminMiddleware;
