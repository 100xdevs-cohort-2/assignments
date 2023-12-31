const express = require("express")
const adminMiddleware = require("../middleware/admin");
const router = express.Router();
const app = express()
const {Admin, User, Course}= require("../db/index")


const port = 3000
// Admin Routes

router.post('/signup', async(req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const ifexist = await Admin.findOne({username: username})

    if(ifexist){
        res.status(404).send(new Error("the user is already existed"))
    }
    else{
        const newAdmin = new Admin(req.body)

        await newAdmin.save()

        res.status(200).send("The Admin created successfully")
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const username = req.headers.username

    const updateUser = await Admin.findOne({
        username: username
    },
    {
        $set: {
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            imageLink: req.body.imageLink
        }
    },
    {
        new: true
    }
    )
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const admin = await Admin.findOne(req.headers.username)

    res.status(200).json(admin)
});

app.listen(port, ()=>{
    console.log(`The port is listening at ${port}`)
})

module.exports = router;