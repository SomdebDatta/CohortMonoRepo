const { User } = require("../db/index.js");

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    // Check readme for the exact headers to be expected

    username = req.headers.username;
    password = req.headers.password;
    
    User.findOne({username: username, password: password}).then(
        (result) => {
            if (!result) {
                return res.status(403).json({Message: "User not found."});
            }
            return next();
        }
    )
}

module.exports = userMiddleware;