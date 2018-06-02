const Message = require('../models/message');
class IoRouter {
    constructor() { }

    route(socket) {
        console.log('Processing new socket connection');
        // TODO: send message history to client
        // TODO: listen to new messages and process them

        socket.on('message', (msg, cb) => {
            console.log(msg);
            console.log(socket.user);
            let message = new Message({
                id:socket.decoded_token.id, 
                name:socket.decoded_token.username,
                msg:msg
            });
            
            message.save(function(err,msg){
                if(err)console.log('Error while saving message',err);
                if(msg)console.log("Success");
                cb();
            });
        })
    }
}


module.exports = IoRouter;