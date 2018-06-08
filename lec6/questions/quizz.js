// timers
// pending callbacks
// idle, prepare
// poll
// setImmediate();
// close


// const fs = require('fs');

// fs.readFile(__filename, () => {
//     setTimeout(() => {
//         console.log('timeout');
//     }, 0)

//     setImmediate(() => {
//         console.log('immediate');
//     })
// });

function asyncFunc (cb) {
    console.log('asyncFunction');
    process.nextTick(asyncFunc);
    // cb();
}

asyncFunc((msg) => {
    console.log(msg);
})

console.log('end of file');