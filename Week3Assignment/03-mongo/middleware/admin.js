// Middleware for handling auth
const { Admin } = require("../db/index.js");

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB.
    // Check readme for the exact headers to be expected.
    username = req.headers.username;
    password = req.headers.password;
    
    Admin.findOne({username: username, password: password}).then(
        (result) => {
            if (!result) {
                console.error("Admin not found.");
                return res.status(403).json({Message: "Admin not found."});
            }
            return next();
        }
    )
}

module.exports = {adminMiddleware};