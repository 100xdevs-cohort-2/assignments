const { Router } = require("express");
const userRouter = Router();
const userMiddleware = require("../middleware/user");

// User Routes
userRouter.post("/signup", (req, res) => {
	// Implement user signup logic
});

userRouter.get("/courses", (req, res) => {
	// Implement listing all courses logic
});

userRouter.post("/courses/:courseId", userMiddleware, (req, res) => {
	// Implement course purchase logic
});

userRouter.get("/purchasedCourses", userMiddleware, (req, res) => {
	// Implement fetching purchased courses logic
});

export { userRouter };
