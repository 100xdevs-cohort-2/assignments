const { Admin, Course } = require('../db');



const postSignup = (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;

    Admin.create({ username: username, password: password })
        .then(admin => {
            res.status(201).json(admin);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating admin' + err);
        });
}

const postCourses = async (req, res, next) => {
    try {
        const { title, description, price, img } = req.body
        await Course.create({ title: title, description: description, price: price, image: img })
        res.status(201).json({message : "course successfully created"})
    }catch(err){
        res.status(500).json( {error : err})
    }
}


const getCourses = async (req, res, next) => {
    try{
        const courses = await Course.find()
        res.status(201).json(courses);
    }catch(err){
        res.status(500).json({ error : err});
    }
}

const authenticateUser = async (req, res, next) => {
    try {
        const username = req.headers.username; // Corrected to use headers instead of header
        const password = req.headers.password;
        const admin = await Admin.findOne({ username, password });

        if (admin) {
            next();
        } else {
            res.status(401).json({ error: 'Unauthorized' });
        }
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    postSignup,
    postCourses,
    getCourses,
    authenticateUser
};