const EventEmitter = require('events').EventEmitter;

class MyEmitter extends EventEmitter {}

let emitter = new MyEmitter();

emitter.setMaxListeners(1);

// emitter.setListener
emitter.on('message', (msg) => {
    console.log('First message: ', msg);
});

emitter.prependListener('message', (msg) => {
    console.log('First message', msg, "I'm second");
});


// emitter.setOnceListener
emitter.once('anotherMessage', (msg) => {
    console.log('Second message', msg);
});


emitter.emit('message', 'Hello');
emitter.emit('anotherMessage', {name: 'Frank'});

emitter.emit('message', 'there');
emitter.emit('anotherMessage', {name: 'John'});




