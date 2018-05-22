const net = require('net');

// let socket = net.createConnection(
//     {host: 'localhost', port: 8888});


// socket.on('connect', () => {
//     console.log("Connected to server");
//     socket.emit('newMessage', {text: 'Hello socket!'});
// });

let socket = new net.Socket()

socket.connect(8888, '127.0.0.1', () => {
    console.log('connected to server!');

    process.stdin.on('data', (data) => {
        socket.write(data);
    });
});



socket.on('data', (msg) => {
    console.log(msg.toString());
})