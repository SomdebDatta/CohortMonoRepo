jwt = require("jsonwebtoken");

const my_str = "saideepulovessomjulovesdeepu";
const key = "sex";

// console.log(jwt.decode("token"));

token = jwt.sign(my_str, key);

console.log(token);

console.log(jwt.verify(token, key));
console.log(jwt.decode(token));

// prev_token= "eyJhbGciOiJIUzI1NiJ9.c2FpZGVlcHVsb3Zlc3NvbWp1bG92ZXNkZWVwdQ.zkpjvgBcQsIR7s3upzL2anP057Dy__kZVgb3mcUV7gA" -> "shhh"
// new_token = "eyJhbGciOiJIUzI1NiJ9.c2FpZGVlcHVsb3Zlc3NvbWp1bG92ZXNkZWVwdQ.jZGXSNbkFYVhtsIMarI0n51h6vf6KwoGHmau1aAXJNw" -> "sex"


// token = {"saideepulovessomjulovesdeepu" + "shhh"->128bitenocding}
