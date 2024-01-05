const jwt = require("jsonwebtoken");
const secret = "sh";
const username = "ae";

token = jwt.sign({username_key: username}, secret);

console.log(jwt.decode(token, secret));