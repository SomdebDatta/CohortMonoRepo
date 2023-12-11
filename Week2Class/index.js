const express = require("express");

const app = express();

const port = 3000;

app.get('/', (req, res) => {
    console.log(req.body);
    console.log(req.headers);
    res.send('Hello World!');
})

app.listen(port)