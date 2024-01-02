
const zod = require("zod");

adminUsername = zod.string();
adminPassword = zod.string().min(6);

function userMiddleware(req, res, next) {
    // Implement user auth logic
    // You need to check the headers and validate the user from the user DB. 
    // Check readme for the exact headers to be expected

    username = req.headers.username;
    password = req.headers.password;

    usernameResponse = adminUsername.safeParse(username);
    passwordResponse = adminPassword.safeParse(password);

    if(!(usernameResponse.success && passwordResponse.success)) {
        console.error("Username / Password invalid");
        throw new Error("Username / Password invalid");
    }
    next();
}

module.exports = userMiddleware;