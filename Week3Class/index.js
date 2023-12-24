/*
https://gist.github.com/hkirat/16f1480481596856e8ed911508a01638
*/

const express = require('express');
const zod = require('zod');

const schema = zod.array(zod.number());


function emailValidator(obj) {
    const email_schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8)
    });

    response = email_schema.safeParse(obj);
    console.log(response);
    return response;
}


const app = express();

app.use(express.json());

app.post('/health-checkup', function(req, res) {
    const kidneys = req.body.kidneys;
    // const kidneyLength = kidneys.length;

    // res.send('you have ' + kidneyLength + ' kidneys');

    const response = schema.safeParse(kidneys);

    if (!response.success) {
        
        res.status(411).json({Message: "Input invalid!"});
    }
    // res.send({response});

});

app.post('/login', function(req, res) {
    response = emailValidator(req.body);

    if (!response.success) {
        res.status(411).json({Message: "Invalid login credentials."});
        return;
    }
    res.json({Message: "Login successful!"});
})


// Global catch
// app.use(function(err, req, res, next) {
//     res.json({
//         msg: "Kuch toh gadbad hai..."
//     })
// })

app.listen(3000);