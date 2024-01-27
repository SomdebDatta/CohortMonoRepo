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

    const { success } = signupBody.safeParse(req.body);

    if (!success) {
        return res.status(411).json({message: 'Incorrect input.'});
    }

    console.log("zod validated.");

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

    const userId = user._id;

    const token = jwt.sign({userId}, JWT_SECRET);
    return res.json({
        message: 'User created successfully',
        token: token
    });
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

    return res.json({token: token});
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
});

userRouter.put('/', authMiddleware, async (req, res) => {
    const { success } = updateBody.safeParse(req.body);
    if(!success) {
        return res.json({message: 'Error while updating information.'});
    }
    const user = await User.updateOne({_id: req.userId}, req.body);
    return res.json({message: 'Updated successfully.'});
})

userRouter.get('/bulk', async (req, res) => {
    const filter = req.query.filter || '';

    const users = await User.find({
        $or: [{firstName: {'$regex': filter}},
        {lastName: {'$regex': filter}}]
    });

    return res.json({
        users: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        })
        )
    });
})

module.exports = { userRouter };