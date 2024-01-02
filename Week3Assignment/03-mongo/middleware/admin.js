// Middleware for handling auth
const { Admin } = require("../db/index.js");

const zod = require("zod");

adminUsername = zod.string();
adminPassword = zod.string().min(6);

function credentialValidationMiddleware(req, res, next) {
    username = req.body.username;
    password = req.body.password;

    usernameResponse = adminUsername.safeParse(username);
    passwordResponse = adminPassword.safeParse(password);

    if(!(usernameResponse.success && passwordResponse.success)) {
        error = new Error("Username / Password invalid");
        error.status = 400;
        console.error("Username / Password invalid...");
        return next(error);
    }

    Admin.findOne({username: username}).then(
        (result) => {
            if (result) {
                console.error("Username already exists.");
                error = new Error("Username already exists.");
                error.status = 400;
                return next(error);
            }
            console.log("Username and password validated successfully.");
            return next();
        }
    )
}

function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB.
    // Check readme for the exact headers to be expected.
    username = req.headers.username;
    password = req.headers.password;
    
    Admin.findOne({username: username, password: password}).then(
        (result) => {
            if (!result) {
                error = new Error(`Username / Password not in Admin DB. - ${username} ${password}`);
                error.status = 404;
                console.error("Username / Password not in Admin DB.");
                return next(error);
            }
            return next();
        }
    )
}

module.exports = {adminMiddleware, credentialValidationMiddleware};