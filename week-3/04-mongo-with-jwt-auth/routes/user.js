const { Router } = require("express");
const router = Router();
const express = require("express")
const userMiddleware = require("../middleware/user");
const { User } = require("../db");
const app = express()
const jwt = require('jsonwebtoken')
const secretpass = "secret"
const port = 3001
const zod = require('zod')
const { Admin, Course} = require('../db/index')

// User Routes
app.post('/signup', async (req, res) => {
    // Implement user signup logic
    const username = req.headers.username
    const password = req.headers.password

    const user = await User.create({
        username: username,
        password: password
    })

    await user.save()

    res.status(200).send("The user is saved")

});

app.post('/signin', (req, res) => {
    // Implement admin signup logic
    const username = req.headers.username
    const password = req.headers.password

    const userSchema = zod.object({
        username: zod.string(),
        password: zod.string()
    })

    const response = userSchema.safeParse({
        username, password
    })
    
    if(!response){
        res.send("there was an error")
    }
    else{
        const payload = {username, password}
        const token = jwt.sign(payload, secretpass)

        res.send(token)
    }
});

app.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const token = req.headers.authorization
    const decode = jwt.verify(token, secretpass)

    if(decode){
        const courses = await Course.findOne({})

        res.status(200).send(courses)
    }
    else{
        res.status(404).send("you're request failed")
    }

    
});

app.post('/courses/:courseId', userMiddleware, async (req, res) => {

    // Implement course purchase logic
    const token = req.headers.authorization
    const decode = jwt.verify(token, secretpass)
    const username = req.headers.username
    const courseid = req.params.courseId

    if(decode){
        const user = await User.findOne({
            username: username
        })

        const course = await Course.findOne({
            _id: Object(courseid)
        })

        user.courses.push(course)

        res.status(200).send("I created a course")
    }
    else{
        res.status(404).send("Invalid token")
    }
});

app.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    const user = req.headers.username

    const usercourse = await User.findOne({
        username: username
    })

    res.send(usercourse.courses)

});

app.listen(port, ()=>{
    console.log(`The app is listening at ${port}`)
})
