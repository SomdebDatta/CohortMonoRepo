const express = require("express");
const cors = require("cors");

app = express();

app.use(cors());

app.use(express.json());

app.get("/calculateInterest", (req, res) => {
    console.log("control reached backend!");
    const principal = parseFloat(req.query.principal);
    const rate = parseFloat(req.query.rate);
    const time = parseFloat(req.query.time);
    

    const interest = (principal * rate * time) / 100;

    const total = principal + interest;

    console.log({total: total, interest: interest});

    // res.set({
    //     "Content-Type": "application/json",
    //     "Access-Control-Allow-Origin": "*",
    //     "Access-Control-Allow-Credentials": true
    // });

    return res.send({total: total, interest: interest});
})


app.listen(3000);