class Participant {
    constructor(name) {
        this.name = name;
    }

    send(msg, to) {
        this.chat.send(msg, to);
    }

    receive(msg) {
        console.log(`${this.name} got message: ${msg}`)
    }
}

class Chat {
    constructor() {
        this.participants = {};
    }

    register(participant) {
        this.participants[participant.name] = participant;
        participant.chat = this;
    }

    send(msg, to) {
        this.participants[to].receive(msg);
    }
}


let chat = new Chat();

let john = new Participant('John');
let jane = new Participant('Jane');

chat.register(john);
chat.register(jane);


john.send('Hello', 'Jane');
jane.send('hi!', 'John');