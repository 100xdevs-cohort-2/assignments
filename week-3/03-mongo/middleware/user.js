const { User } = require("../db");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. Check readme for the exact headers to be expected

    const username = req.headers.username;
    const password = req.headers.password;
    
    User.findOne({ 
        username: username,
        password: password
    })
    .then(function(data) {
        if(data) {
            next();
        } else {
            res.status(403).json ({
                msg: "User not found"
            })
        }
    })
}
            

module.exports = userMiddleware;

//wrong code
/*
if (existingUser) {
          return res.status(400).send("User already exists");
        }
      
        const user = new User({
          username: username,
          password: password,
        });
      
        user.save();
        res.json({
          msg: "User created successfully"
        });
    });

    app.get("/users/courses", async function (req, res) {
        console.log("Received GET request to /users/courses");
        const username = req.headers.username;
        const password = req.headers.password;
      
        const existingCourse = await Course.findOne({ username: username });
        if (!existingCourse) {
            return res.status(400).send("Course does not exist");
        } else {
            res.json({ 
                courses: [ { 
                    id: 1,
                    title: 'course title',
                    description: 'course description',
                    price: 100,
                    imageLink: 'https://linktoimage.com',
                    published: true
                    }] });
        }
    });

    app.post("/users/courses/:courseId", async function (req, res) {
        console.log("Received POST request to /users/courses/:courseId");
        const username = req.body.username;
        const password = req.body.password;
        const courseId = req.params.courseId;
      
        const existingCourse = await Course.findOne({ courseId: courseId });
        if (!courseId) {
            return res.status(400).send("Course does not exist");
        } else {
            res.json({
                message: 'Course purchased successfully'
            });
        }
    });

    app.get("/users/purchasedCourses", async function (req, res) {
        console.log("Received GET request to /users/purchasedCourses");
        const username = req.headers.username;
        const password = req.headers.password;
      
        const purchasedCourse = await User.findOne({ course: course });
        if (!course) {
            return res.status(400).send("No course purchased");
        } else{
            res.json({ 
                courses: [ { 
                    id: 1,
                    title: 'course title',
                    description: 'course description',
                    price: 100,
                    imageLink: 'https://linktoimage.com',
                    published: true
                    }] });
        }
    });
    */