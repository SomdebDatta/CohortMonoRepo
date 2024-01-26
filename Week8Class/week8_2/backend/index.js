const express = require("express");
const jwt = require("jsonwebtoken");

const { User } = require("./db");

const port = 3000;
const JWT_SECRET = "shhh";

const app = express();

app.use(express.json());

app.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password});
    
    res.json({Message: "User created successfully"});
    
});

app.post('/signin', async (req, res) => {
    // Implement admin signin logic
    const user = await User.findOne({firstName: req.body.firstName, password: req.body.password});
    
    if (user) {
        const token = jwt.sign({firstName: req.body.firstName}, JWT_SECRET);
        res.json({Token: token});
    }
    else {
        res.status(411).json({Message: "Incorrect username / password."});
    }
});

app.put('/update', (req, res) => {
    
})


app.listen(port, () => {
    console.log(`App is running on port ${port}. Server is live!`)
});