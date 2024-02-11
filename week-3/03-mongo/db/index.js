const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://assignment:rniAQJsMKDagTTYb@cluster0.yktrtu5.mongodb.net/assignment');

// Define schemas
const AdminSchema = new mongoose.Schema({
    username : String,
    password : String,
});

//Body: { title: 'course title', description: 'course description', price: 100, imageLink: 'https://linktoimage.com' 
const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title : String,
    description : String,
    price : Number,
    imageLink : String,
});

    const UserSchema = new mongoose.Schema({
        // Schema definition here
        username : String,
        password : String,
        purchasedCourses: [
            {
              title: String,
              description: String,
              price: Number,
              imageLink: String,
            },
          ]
    });


const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}