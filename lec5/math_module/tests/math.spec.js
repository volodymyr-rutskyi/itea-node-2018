const chai = require('chai');
const mocha = require('mocha');

const MathModule = require('../index');

let expect = chai.expect;
let should = chai.should();
let assert = chai.assert;

function asyncFunc() {
    return new Promise(function(resolve, reject) {
        setTimeout(() => {
            resolve(10);
        }, 3000);
    });
}


describe('Math module tests', function () {
    it('Adding simple numbers', function () {
        let num1 = 4;
        let num2 = 9;

        MathModule.addNumbers(num1, num2).should.be.equal(num1 + num2);
    });


    it('Async function test', async function() {
        let result = await asyncFunc();
        console.log(result);
        assert(result === 10);
    })
    .timeout(4000);
});