$(function () {

    // if session storage has no JWT token - redirect to login page
    if (!sessionStorage.token) {
        window.location.href = '/login'
    }

    var socket = io();
    var chatboard = $('#messages');

    // Get token from the session storage and try to perform authorization
    var token = sessionStorage.token;
    
    socket.on('connect', function() {
        socket.emit('authenticate', {token: token});
    })

    socket.on('history', function(msgs) {
        
        msgs.forEach(function(message) {
            chatboard.append($('<li>').text(message.name + ': ' + message.msg));
        });
    });  
    
    socket.on('newmsg', function(msg){
        chatboard.append($('<li>').text(msg.name + ': ' + msg.msg));
    })
    
    
    
    socket.on('error', function(error) {
        console.log('Socket error:\n' + JSON.stringify(error, null, 2));

        if (error.type == "UnauthorizedError" || error.code == "invalid_token") {
            window.location.href = '/login';
        }
    });

    $('#msg').on("submit", function(e){

        e.preventDefault();
        e.stopPropagation();


        let msg = $('#m').val().trim();
        if (!msg) return;
        
        socket.emit("message", msg, function(err) {
            if (err) console.log("Error while sending a message!", err);
            chatboard.append($('<li>').text(sessionStorage.username + ': ' + msg));
            $('#m').val('');
        });
    })
  });