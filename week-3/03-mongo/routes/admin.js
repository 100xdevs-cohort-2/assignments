const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require("../db");
const router = Router();

// Admin Routes
application.use(adminMiddleware);

router.post("/signup", async (req, res) => {
  // Implement admin signup logic
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ message: "New Admin k liye username password zaruri hai" });
  }

  try {
    const ExisitingAdmin = await Admin.findOne({ username: username });
    if (ExisitingAdmin) {
      return res.status(404).json({ error: "Bhai tu pehle se hi DB me hai" });
    } else {
      const newAdmin = new Admin({ username, password }).save();
      res.status(200).json({ message: "Admin created successfully" });
    }
  } catch (error) {}
});

router.post("/courses", adminMiddleware, (req, res) => {
  // Implement course creation logic
  const username = req.headers.username;
  const password = req.headers.password;
});

router.get("/courses", adminMiddleware, (req, res) => {
  // Implement fetching all courses logic
});

module.exports = router;
