const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const { Admin, User, Course} = require("../db/index")


// Admin Routes
router.post('/signup', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username;
    const password = req.headers.password;

    try{
        const adminPerson = Admin.create({
            username : username,
            password : password
        });
        res.status(200).json(adminPerson); //returns empty object as Admin.create is async function
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title;
    const description = req.body.description;
    const price = req.body.price;
    const imageLink = req.body.imageLink;
   
    try{
        let course = await Course.create({
            title : title,
            description : description,
            price : price,
            imageLink : imageLink
        });
        res.status(200).json(course); // if no async await will return empty object
    }
    catch(err){
        res.status(400).send(err);
    }
});

router.get('/courses', adminMiddleware, (req, res) => {
    // Implement fetching all courses logic
    // const courses = Course.find({});
    // res.status(200).send(courses);
    Course
        .find()
        .then((courses) => res.status(200).json(courses));
});

module.exports = router;