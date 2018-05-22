const fs = require('fs');


fs.appendFile('./files/async.txt', 'It is an async file', (err) => {
    if (err) console.log('Error while writing a file', err);
    else console.log('File created successfully');
});


