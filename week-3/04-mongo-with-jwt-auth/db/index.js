const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGO_URL;

// Connect to MongoDB
mongoose
    .connect(MONGO_URL)
    .then(function(resp) {
        console.log("Connection with database is secured");
    })
    .catch(function(resp) {
        console.log("Connection with database is refused");
    });

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    }
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: mongoose.Decimal128,
        required: true
    },
    imageLink: {
        type: String, 
        required: true,
    },
    purchased: {
        type: Boolean,
        default: true
    }
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String, 
        required: true
    },
    courses: [CourseSchema]
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}