const { User } = require("../db");

async function userMiddleware(req, res, next) {
  // Implement user auth logic
  // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

  const { username, password } = req.headers;

  try {
    // Check if user exists and credentials are valid
    const user = await User.findOne({ username, password });

    if (!user) {
      return res.status(401).json({ message: "User authentication failed" });
    }

    // Attach the user object to the request for further use in routes
    req.user = user;

    // Move to the next middleware or route handler
    next();
  } catch (error) {
    console.error("Error in userMiddleware:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
}

module.exports = userMiddleware;
