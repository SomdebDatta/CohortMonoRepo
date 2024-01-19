const jwt = require("jsonwebtoken");
const secret = "sh";
const username = "ae";
const username2 = "aee";

token = jwt.sign({username_key: username}, secret);
token2 = jwt.sign({username_key: username2}, secret);
// console.log(token);
// console.log(token2);
my_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZV9rZXkiOiJhZSIsImlhdCI6MTcwNTY0MjIyN30.dW9sQu0IMNCO13TypzETC2oN4v2pyTy_mLIViHeYhP4";
my_token2 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZV9rZXkiOiJhZWUiLCJpYXQiOjE3MDU2NDIzMTR9.Gg2vokR_HpM8jKtc5g2ElK5D6mM52HhuynQH1cIJUKk";

// console.log(jwt.decode(token));
console.log(jwt.decode(my_token2));
// console.log(jwt.verify(token, secret));
// console.log(jwt.verify(my_token2, secret));
