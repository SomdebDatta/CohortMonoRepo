const { Router } = require("express");
const express = require("express");


const { adminMiddleware } = require("../middleware/admin");
const { Admin, Course } = require("../db/index.js");

const router = Router();

const app = express();

app.use(express.json());

// router.use(adminMiddleware);

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic

    await Admin.create({username: req.body.username, password: req.body.password});
    res.json({Message: "Admin created successfully."});

    // const response = await Admin.create({username: req.body.username, password: req.body.password});
    // return res.send("Admin created successfully.");
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
    return res.json({
        courses: courses
    });
});

module.exports = router;