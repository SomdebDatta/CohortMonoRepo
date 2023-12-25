const express = require("express");
const jwt = require("jsonwebtoken");
const jwt_pass = "1234";

const app = express();

app.use(express.json());

const ALL_USERS = [
    {
        username: "som@gmail.com",
        password: "123",
        name: "Som Datta"
    },
    {
        username: "depp@gmail.com",
        password: "123",
        name: "Sai Depu"
    }
]

function userExists(username, password) {
    // write logic to return true or false if the user exists
    // in ALL_USERS array
    
    return ALL_USERS.some(element => element.username === username && element.password === password);
}

app.post("/signin", function(req, res) {
    const username = req.body.username;
    const password = req.body.password;
    
    if (!userExists(username, password)) {
        return res.status(403).json({Message: "User does not exist!"});
    }

    var token = jwt.sign({username: username}, jwt_pass);

    return res.json({token});
})

app.get("/users", function(req, res) {
    const token = req.headers.authorization;

    try {
        const decoded = jwt.verify(token, jwt_pass);
        const username = decoded.username;
        
        return res.send(ALL_USERS.filter(element => element.username != username));
    }
    catch (err) {
        return res.status(403).json({Message: "Invalid token"});
    }
})

app.listen(3000);