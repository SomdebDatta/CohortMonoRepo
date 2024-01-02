const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const jwtPassword = "123";

const dbUrl = "mongodb+srv://dattasomdeb1099:kYMjulloU7H7ikBM@cluster0.rhqrhfb.mongodb.net/users";


mongoose.connect(dbUrl);

const User = mongoose.model("User", {
    name: String,
    username: String,
    password: String
});

// const user1 = new User({name:"dusra", username: "dusra", password: "dusra"});

// user1.save().then(() => console.log("dusra done."));

const users = User.find({});

console.log(users);

// const app = express();

// app.use(express.json());

// function userExists(username, password) {

// }

// app.get("/users/", (req, res) => {

// });

// app.post("/signin", (req, res) => {
//     const username = req.headers.username;
//     const password = req.headers.password;

//     if (!userExists(username, password)) {
//         return res.send("")
//     }
// })