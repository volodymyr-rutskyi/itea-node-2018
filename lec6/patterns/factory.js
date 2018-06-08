class Person {
    constructor(date) {
        this.birthDate = date;
    }
}


module.exports.getPerson = function () {
    let person = new Person(new Date());
    return person;
}
