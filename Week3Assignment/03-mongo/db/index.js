const mongoose = require('mongoose');

// Connect to MongoDB
mongoose.connect('mongodb+srv://dattasomdeb1099:kYMjulloU7H7ikBM@cluster0.rhqrhfb.mongodb.net/users_new');

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
    id: String,
    title: String,
    description: String,
    price: Number,
    imageLink: String 
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}