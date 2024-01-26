const mongoose = require("mongoose");

// Connect to DB
mongoose.connect("mongodb+srv://dattasomdeb1099:bedmos@cluster0.rhqrhfb.mongodb.net/paytm");

// Creating User Schema

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50    
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
})

const User = mongoose.model("User", UserSchema);

module.exports = { User };