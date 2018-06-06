let factorial = require('./my_module');


let result = factorial(5);

if (result != 120) {
    console.error('Unexpected result!', result);
} else {
    console.log('Test passed!');
}