const { Router } = require("express");

const { User, Course } = require("../db/index");

const router = Router();
const userMiddleware = require("../middleware/user");

// User Routes
router.post('/signup', async (req, res) => {
    // Implement user signup logic
    await User.create({
        username: req.body.username,
        password: req.body.password});
    
    res.json({Message: "User created successfully"});
    
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

    await User.updateOne({username: req.headers.username}, 
        {
            "$push": {
                purchasedCourses: courseId
            }
        });

    res.json({Message: "Course purchased successfully"});
    
});

router.get('/purchasedCourses', userMiddleware, async (req, res) => {
    // Implement fetching purchased courses logic

    const user = await User.findOne({
        username: req.headers.username
    });
    
    const courses = await Course.find({
        _id: {
            "$in": user.purchasedCourses
        }
    });

    res.json({
        courses: courses
    });

});

module.exports = router