const client = require('socket.io-client');

var socket = client('http://localhost:8888');

socket.on('connected', () => {
    socket.emit('chatMessage', {text: 'Hi'});
})