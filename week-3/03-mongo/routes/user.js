const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require("../db");

// User Routes
router.post('/signup', async (req, res) => {
    try {
        const { username, password } = req.body;

        const existuser = await User.findOne({ username });

        if (existuser) {
            return res.status(401).json({ error: "user already exist" });
        }

        const newuser = new User({ username, password, purchasedCourses: [] });
        await newuser.save();

        res.status(200).json({ msg: "user created successfully" });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.get('/courses', async (req, res) => {
    try {
        const courses = await Course.find({ published: true });
        res.json({ courses });
    } catch (error) {
        res.status(500).json({ error: "Internal server error" });
    }
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    try {
        const { username } = req.headers;
        const { courseId } = req.params;

        const user = await User.findOne({ username });
        if (!user) {
            return res.status(401).json({ error: "user not found" });
        }

        const course = await Course.findById(courseId);

        if (!course || !course.published) {
            return res.status(403).json({ error: "course not publish" });
        }

        if (!user.purchasedCourses.includes(courseId)) {
            user.purchasedCourses.push(courseId);
            await user.save();
        }

        res.status(200).json({msg: "course purchased successfully"});
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }

});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    try {
        const {username} = req.headers;

        const user = await User.find({username}).populate("purchasedCourses");

        if(!user) {
            res.status(401).json({error: "user not find"});
        }

        res.json({purchasedCourses: user.purchasedCourses});
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
});

module.exports = router