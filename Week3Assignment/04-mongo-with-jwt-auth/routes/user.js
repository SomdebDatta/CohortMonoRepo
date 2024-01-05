const { Router } = require("express");
const jwt = require("jsonwebtoken");

const { User, Course } = require("../db/index");
const userMiddleware = require("../middleware/user");
const { JWT_SECRET } = require("../config");

const router = Router();
// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password});
    
    res.json({Message: "User created successfully"});
});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic
    const user = await User.findOne({username: req.body.username, password: req.body.password});
    
    if (user) {
        const token = jwt.sign({username: req.body.username}, JWT_SECRET);
        res.json({Token: token});
    }
    else {
        res.status(411).json({Message: "Incorrect username / password."});
    }
});

router.get('/courses', async (req, res) => {
    // Implement listing all courses logic
    const courses = await Course.find({});
    return res.json({
        courses: courses
    });
});

router.post('/courses/:courseId', userMiddleware, async (req, res) => {
    // Implement course purchase logic

    const courseId = req.params.courseId;

    await User.updateOne({username: req.username},
        {
            "$push": {
                purchasedCourses: courseId
            }
        });
    res.json({Message: "Course purchased successfully"});
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic
    
    const user = await User.findOne({username: req.username});
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({Courses: courses});
});

module.exports = router