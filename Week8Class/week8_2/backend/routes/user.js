const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const { User } = require('../db');
const { JWT_SECRET } = require('../config');

const userRouter = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

userRouter.post('/signup', async (req, res) => {

    const success = signupBody.safeParse(req.body.username);

    if (!success) {
        res.status(411).json({message: 'Incorrect input.'});
    }

    const response = await User.findOne({username: req.body.username});

    if (response) {
        res.status(411).json({message: 'Email already taken'});
    }
    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    const token = jwt.sign(req.body.username, JWT_SECRET);
    res.json({
        message: 'User created successfully',
        token: token
    });
    }
)

userRouter.post('signin', async (req, res) => {
    const success = signinBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({message: 'Error logging in'});
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (!user) {
        res.status(411).json({message: 'Error while logging in'});
    }

    const token = jwt.sign({username}, JWT_SECRET);

    res.json({token: token});
})

module.exports = { userRouter };