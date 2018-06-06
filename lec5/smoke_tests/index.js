const express = require('express');


let app = express();

app.get('/user', (req, res) => {

    res.send({
        name: 'John',
        age: 37
    });
});


app.listen(3000, function () {
    console.log('listening on port 3000');
});