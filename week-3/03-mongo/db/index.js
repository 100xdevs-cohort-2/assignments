const mongoose = require('mongoose');
//  const DB_url = require('../config.js').default;

mongoose.connect("mongodb+srv://:cluster0.lz5uy4y.mongodb.net/");

// mongoose.connect(DB_url)

// Define schemas
const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    // minLength: [8, 'Password must be at least 8 characters long'],
    // match: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain alphanumeric characters'],
  },
});


const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        required: true
    },
    password : {
        type: String,
        require: true,
        minLength: [8,'Password must be at least 8 characaters long'],
        match: [/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/, 'Password must contain alphanumeric characters'],
        
    }
    
});

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    description: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    image:{
        type: String,
        require: true
    }
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}