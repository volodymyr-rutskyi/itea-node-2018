// let b = 'World';

// let a = `Hello ${b}`;


// console.log(a);



// function doSomething(...a) {
//     console.log(a);
// }


// doSomething('one', 'two', 'sdfa');



// let a = [5, 6, 7];

// let b = [1, 2, 3, 4, ...a, 8, 9];

// console.log(JSON.stringify(b, null, 2));


// function getMultiple() {
//     return [100, 'some string'];
// }


// let a, b;

// [a, b] = getMultiple();

// console.log(a);
// console.log(b);




// function a () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(50);
//         }, 5000);
//     });
// }



// function b () {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(500000);
//         }, 5000);
//     });
// }


// console.time('exec');
// (async function () {
//     // let var1 = await a();
//     // let var2 = await b();

//     let [var1, var2] = await Promise.all([a(), b()]);
//     console.timeEnd('exec');
//     console.log(var1, var2);
// })();