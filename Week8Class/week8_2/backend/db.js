const mongoose = require("mongoose");

// Connect to DB
mongoose.connect("mongodb+srv://dattasomdeb1099:bedmos@cluster0.rhqrhfb.mongodb.net/paytm");

// Creating User Schema

const UserSchema = new mongoose.Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    password: {type: String, required: true},
})

const User = mongoose.model("User", UserSchema);

module.exports = { User };