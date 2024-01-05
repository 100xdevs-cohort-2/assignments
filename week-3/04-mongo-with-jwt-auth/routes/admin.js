const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const z = require('zod');
const jwt = require('jsonwebtoken'); // Add this line to import jwt module
const { jwtPassword } = require("../../02-jwt");
const { Admin, Course } = require("../db");

const userManager = z.object({
    username: z.string().email(),
    password: z.string().min(6),
});

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = userManager.parse(req.body);
        const admin = await Admin.create({ username, password });

        // Convert admin to a plain JavaScript object
        const adminObject = admin.toObject();

        const token = jwt.sign(adminObject, jwtPassword);
        
        // Set the token in the response headers
        res.header('Authorization', `Bearer ${token}`);
        
        res.json({ message: "Admin added successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});



router.post('/signin', async (req, res) => {
    try {
        const { username, password } = userManager.parse(req.body);

        const payload = {
            username: username,
            password: password,
        };

        const token = jwt.sign(payload, jwtPassword);
        res.json({ token });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    try {
        const { title, description, price, img } = req.body;
        const course = await Course.create({ title, description, price, img });
        res.json(course);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

router.get('/courses', adminMiddleware, async (req, res) => {
    try {
        const courses = await Course.find();
        res.json(courses);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

module.exports = router;
