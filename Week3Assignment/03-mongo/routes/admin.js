const { Router } = require("express");
const express = require("express");
const uuid = require("uuid");


const {adminMiddleware, credentialValidationMiddleware} = require("../middleware/admin");
const { Admin, Course } = require("../db/index.js");

const router = Router();

const app = express();

app.use(express.json());

// router.use(adminMiddleware);

// Admin Routes
router.post('/signup', credentialValidationMiddleware, async (req, res) => {
    // Implement admin signup logic

    const response = await Admin.create({username: req.body.username, password: req.body.password});
    return res.send("Admin created successfully.");
});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const id = uuid.v4();

    const response = await Course.create({id: id, title: req.body.title, description: req.body.description, price: req.body.price,
    imageLink: req.body.imageLink});
    console.log("Course created successfully.");
    
    return res.json({Message: "Course created successfully.", courseId: id});
    
});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const courses = await Course.find({}).then((courses) => {console.log(`Courses retrieved - ${courses}`)});
    return res.json(courses);
});

app.use("/admin", router, (err, req, res, next) => {
    console.error("Error handling middleware invoked!");
    if (err.status && err.message) {
        return res.status(err.status).json({Message:err.message});
    }
    else {
        return res.status(400).json({ErrorMessage: `Error has occurred - ${err}`});
    }
    
})

app.listen(3000);
module.exports = router;