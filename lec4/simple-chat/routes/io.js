const Message = require('../models/message');
class IoRouter {
    constructor() { }

    route(socket) {
        console.log('Processing new socket connection');
        // TODO: send message history to client
        // TODO: listen to new messages and process them

        socket.join('chat');

        Message.find(function(err, msgs){
            if(err) console.log('Error', err);
            else {
                socket.emit('history', msgs);
            } 

        })


        socket.on('message', (msg, cb) => {
            console.log(msg);
            console.log(socket.user);
            let message = new Message({
                id:socket.decoded_token.id, 
                name:socket.decoded_token.username,
                msg:msg
            });
            
            message.save(function(err,result){
                if(err)console.log('Error while saving message',err);
                if(result)console.log("Success");
                cb();
                socket.to('chat').emit('newmsg', message);
            });
        })
    }
}


module.exports = IoRouter;