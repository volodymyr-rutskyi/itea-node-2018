let EventEmitter = require('events').EventEmitter;


class MyObserverClass extends EventEmitter {

    doSomething() {
        this.emit('something');
    }
}


module.exports = MyObserverClass;