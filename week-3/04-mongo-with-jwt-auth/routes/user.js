const { Router } = require("express");
const router = Router();
const userMiddleware = require("../middleware/user");
const {User, Course, UserCourseMap} = require("../db");
const jwtObject = require("../webToken");

// User Routes
router.post('/signup', async (req, res) => {
    //check if user already exists
    const username = req.body.username;
    const password = req.body.password;

    const userExists = await User.findOne({
        username: username
    }).exec()

    if(userExists && userExists.username == username) {
        res.status(200).json({
            message:"User already exists!",
        })
        return;
    }

    const user = new User({
        username,
        password
    })

    try {
        user.save()
    } catch (err) {
        res.status(500).json({
            message:"Internal server error! Unable to create the user" 
        })
        console.log(err);
        return;
    }

    res.status(200).json({
        message:"User created successfully!"
    })
    
});

router.post('/signin', async (req, res) => {
    //sign in logic
    const username = req.body.username;
    const password = req.body.password;

    //check if user exists 

    const userExists = await User.findOne({
        username: username
    })

    if(userExists.password != password) {
        res.status(403).json({
            message:"Access denied!"
        })
        return;
    } else if(!userExists) {
        res.status(200).json({
            message:"Bhai pehle signup!"
        })
        return;
    }

    try {
      const token = await jwtObject.jwt.sign({
         username: username
      }, jwtObject.jwtSecret)
      res.status(200).json({
        token: token
      });
      return;
    } catch (err) {
        console.log("Errored while generating token", err);
        res.status(500).json({
            message:"Errored while generating token!"
        })   
        return;
    }
});

router.get('/courses', userMiddleware, async (req, res) => {
    const courses = await Course.find({}).exec();
    res.status(200).json({courses: courses})
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    if(!res.locals.username) {
        res.send(404).message({
            message:"Pakda gaya bhai tu! Nakli token wale tera mu kaala!"
        })
        return;
    }
    const courseId = req.params.courseId;
    const username = res.locals.username;

    const findMappedCourseIds = await UserCourseMap.find({
        courseId: courseId,
        username: username
    }).exec()

    if(findMappedCourseIds && findMappedCourseIds.length) {
        res.status(200).json({
            message:"Ye course khareed rakha hai already bro!"
        })
        return;
    } else {
        const userCourseMap = new UserCourseMap({
            username: username,
            courseId: courseId
        })

        try {
            userCourseMap.save();
        } catch (err) {
            res.status(500).json({
                message:"Bhai kuch tu atka hai, khareed nahi paya! Wapas try kariyo!"
            })
            console.log("Issue while purchaisng course", err);
            return;
        }
    }
    res.status(200).json({
        message:"Course purchased successfully!"
    })

    return;
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    if(!res.locals.username) {
        res.status(404).json({
            message: "Pakda gaya bro, Nakli tokennnn!"
        })
        return;
    }

    const purchasedCourses = await UserCourseMap.find({
        username: res.locals.username
    })

    if(!purchasedCourses || !purchasedCourses.length) {
        res.status(400).json({
            message:"Khareede bina kaise list karu purchased courses? Khareedo bhai pehle!"
        })
        return;
    }

    let purchasedCourseIds = [];
    purchasedCourseIds = purchasedCourses.map(data => {
        return data.courseId
    })

    const purchasedCoursesData = await Course.find().where('courseId').in(purchasedCourseIds);

    if(!purchasedCoursesData || !purchasedCoursesData.length) {
        res.status(404).json({
            message:"Aisa prateet hota hai k tumne course khareeda hai par data kyu nahi hai?🤔"
        })

        return;
    }

    res.status(200).json({
        purchasedCourses: purchasedCourses
    })
});

module.exports = router