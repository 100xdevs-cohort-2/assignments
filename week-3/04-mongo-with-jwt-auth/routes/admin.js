const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const router = Router();
const express = require("express")
const {User, Admin, Course} = require('../db/index')
const jwt = require('jsonwebtoken')
const secretpass = 'secret';
const zod = require('zod')

const app = express()

app.use(express.json())

const port = 3000

// Admin Routes
app.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    const user = await Admin.create({
        username: username,
        password: password
    })

    await user.save()

    res.status(200).send("You're are successfully signed up")
});

app.use(adminMiddleware)

app.post('/signin', (req, res) => {
    // Implement admin signup logic
    const userSchema = zod.object({
        username: zod.string(),
        password: zod.string()
    })

    const username = req.body.username
    const password=  req.body.password

    const response = userSchema.safeParse({username,
        password
    })

    if(!response){
        res.status(404).send("there was an error")
    }
    else{
        const payload = {username, password}
        const token = jwt.sign(payload, secretpass)
        res.send(token)
    }
});

app.post('/courses', async (req, res) => {
    // Implement course creation logic
   
    const {title, description, price, imageLink} = req.body

    const course = await Course.create({
        title: title,
        description: description,
        price: price,
        imageLink: imageLink
    })
    
    
   await course.save()

   res.status(200).json({
    message: 'Course created successfully', 
    courseId: course._id
   })
});

app.get('/courses', async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({})

    res.status(200).send(courses)
});


app.listen(port, ()=>{
    console.log(`Your app is listening at ${port}`)
})

