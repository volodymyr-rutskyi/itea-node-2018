const http = require('http');
const fs = require('fs');
const gzip = require('zlib');


let server = http.createServer((req, res) => {
    var fileStream = fs.createReadStream('./files/stream.txt');
    
    let gz = gzip.createGzip();

    fileStream.pipe(gz).pipe(res);

});


server.listen(8888, () => {
    console.log('listening on port 8888');
});