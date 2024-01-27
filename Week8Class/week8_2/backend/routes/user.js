const express = require('express');
const zod = require('zod');
const jwt = require('jsonwebtoken');

const { User } = require('../db');
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middleware');

const userRouter = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    firstName: zod.string(),
    lastName: zod.string(),
    password: zod.string()
});

userRouter.post('/signup', async (req, res) => {

    const { success } = signupBody.safeParse(req.body.username);

    if (!success) {
        return res.status(411).json({message: 'Incorrect input.'});
    }

    const existingUser = await User.findOne({username: req.body.username});

    if (existingUser) {
        return res.status(411).json({message: 'Email already taken'});
    }
    const user = await User.create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        password: req.body.password
    });

    const userId = user._id

    const token = jwt.sign({userId}, JWT_SECRET);
    res.json({
        message: 'User created successfully',
        token: token
    });
    return;
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

userRouter.post('/signin', async (req, res) => {
    const { success } = signinBody.safeParse(req.body);

    if(!success) {
        res.status(411).json({message: 'Error logging in'});
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if (!user) {
        return res.status(411).json({message: 'Error while logging in'});
    }

    const userId = user._id;

    const token = jwt.sign({userId}, JWT_SECRET);

    res.json({token: token});
    return;
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

userRouter.put('', authMiddleware, async (req, res) => {
    const user = await User.updateOne({userId: req.userId}, {}, function(err, docs) {
        if (err) {
            console.log(err);
            res.status(411).json({message: 'Error while updating information'});
        }
        else {
            res.json({message: 'Updated successfully.'})
        }
    })
})

module.exports = { userRouter };