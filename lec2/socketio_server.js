const SocketIO = require('socket.io');


let server = SocketIO();


server.on('connection', (socket) => {
    socket.emit('connected');
    socket.on('chatMessage', (data) => {
        console.log('new chat message from client', data);
    });
});

server.listen(8888, () => {console.log('listening on 8888')});