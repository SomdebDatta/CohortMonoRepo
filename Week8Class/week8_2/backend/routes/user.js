const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const { User } = require('../db');
const { JWT_SECRET } = require('../config');

const userRouter = express.Router();

const email_validator = zod.string().email();

userRouter.post('/signup', async (req, res) => {

    const usernameValidation = email_validator.safeParse(req.body.username);

    if (!usernameValidation.success) {
        res.status(411).json({message: 'Incorrect input.'});
    }

    const response = await User.findOne({username: req.body.username});

    if (response) {
        res.status(411).json({message: 'Email already taken'});
    }
    else {
        await User.create({
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
})

module.exports = { userRouter };