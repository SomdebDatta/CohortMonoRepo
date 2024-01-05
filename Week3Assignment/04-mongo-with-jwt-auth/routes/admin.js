const jwt = require("jsonwebtoken");

const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin, Course } = require("../db/index");
const { JWT_SECRET } = require("../config");

const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    await Admin.create({username: req.body.username, password: req.body.password});
    res.json({Message: "Admin created successfully."});

});

router.post('/signin', async (req, res) => {
    // Implement admin signup logic

    

    const admin = await Admin.findOne({username: req.body.username, password: req.body.password})

    if (admin) {
        const token = jwt.sign({username: req.body.username}, JWT_SECRET);
        res.json({Token: token});
    }
    else {
        res.status(411).json({Message: "Incorrect username / password."});
    }

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const response = await Course.create({
        title: req.body.title, 
        description: req.body.description, 
        price: req.body.price,
        imageLink: req.body.imageLink});
    console.log("Course created successfully.");
    
    return res.json({Message: "Course created successfully.", courseId: response._id});
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic

    const courses = await Course.find({});

    return res.json({Courses: courses});

});

module.exports = router;