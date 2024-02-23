const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../secretKey");

function userMiddleware(req, res, next) {
	// Implement user auth logic
	// You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

	const words = req.headers.authorization;
	const jsonToken = words.split(" ")[1];

	const decoded = jwt.verify(jsonToken, SECRET_KEY);

	if (decoded.username) {
		req.extractedUsername = decoded.username;
		//before passing control to the next function, it adds a property to a request object
		//which can be accessed in next req,res lifycycle.
		// this is done so we can access the username in next call back function wihthou the need of providing the
		//username in the body.
		next();
	} else {
		res.status(404).json({
			msg: "invalid credentials",
		});
	}
}

module.exports = userMiddleware;
