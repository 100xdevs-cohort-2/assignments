const mongoose = require("mongoose");
const uri = "mongodb+srv://chetan:<password>@cluster0.wrxel.mongodb.net/?retryWrites=true&w=majority";

// Connect to MongoDB
mongoose.connect(uri);

// Define schemas
const AdminSchema = new mongoose.Schema({
	// Schema definition here
});

const UserSchema = new mongoose.Schema({
	// Schema definition here
});

const CourseSchema = new mongoose.Schema({
	// Schema definition here
});

const Admin = mongoose.model("Admin", AdminSchema);
const User = mongoose.model("User", UserSchema);
const Course = mongoose.model("Course", CourseSchema);

export { Admin, User, Course };
