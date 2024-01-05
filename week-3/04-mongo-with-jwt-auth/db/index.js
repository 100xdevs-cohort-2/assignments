const mongoose = require('mongoose');
require('dotenv').config()
// Connect to MongoDB
mongoose.connect(`mongodb+srv://thinley:${process.env.password}@cluster0.edn0jaw.mongodb.net/03-mongo-jwt`);

// Define schemas
const AdminSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const UserSchema = new mongoose.Schema({
    // Schema definition here
    username: String,
    password: String
});

const CourseSchema = new mongoose.Schema({
    // Schema definition here
    title: String,
    description: String,
    price: Number,
    imageLink: String
});

const PurchasedSchema = new mongoose.Schema({
    // id: mongoose.Schema.Types.ObjectId
    id: String
})

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);
const Purchase = mongoose.model('Purchase', PurchasedSchema)


module.exports = {
    Admin,
    User,
    Course,
    Purchase
}