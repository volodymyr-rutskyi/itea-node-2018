// let nameProperty = Symbol();

// class Person {

//     constructor() {
//         this.publicProp = 'Heeeee';
//         this[nameProperty] = 'John Doe';
//     }

//     getName() {
//         return this[nameProperty];
//     }
// }



// module.exports = Person;


let a = [1, 2, 13, 34543];

let b = a.filter((val) => {return val > 10});

console.log(JSON.stringify(a));
console.log(JSON.stringify(b));