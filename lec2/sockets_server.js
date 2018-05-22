const net = require('net');

let connections  = [];

let server = net.createServer((socket) => {
    console.log('Client connected!');
    connections.push(socket);
    socket.on('data', (msg) => {
        console.log(msg.toString());
        connections.forEach((c) => {
            if (c == socket) return;
            
            c.write(msg);
        })
    });

    socket.on('close', () => {
        console.log('client disconnected!');
    })
});


server.listen('8888', () => {
    console.log('Waiting for socket connections!');
});