const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const adminRouter = Router();

// Admin Routes
adminRouter.post("/signup", (req, res) => {
	// Implement admin signup logic
});

adminRouter.post("/courses", adminMiddleware, (req, res) => {
	// Implement course creation logic
});

adminRouter.get("/courses", adminMiddleware, (req, res) => {
	// Implement fetching all courses logic
});

export { adminRouter };
