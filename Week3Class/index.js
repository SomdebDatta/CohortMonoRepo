/*
https://gist.github.com/hkirat/16f1480481596856e8ed911508a01638
*/

const express = require('express');
const zod = require('zod');

const schema = zod.array(zod.number());

const app = express();

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;

    // res.send('you have ' + kidneyLength + ' kidneys');

    const response = schema.safeParse(kidneys);
    res.send({response});

});


// Global catch
// app.use(function(err, req, res, next) {
//     res.json({
//         msg: "Kuch toh gadbad hai..."
//     })
// })

app.listen(3000);