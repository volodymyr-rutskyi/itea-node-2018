const chai = require('chai');
const mocha = require('mocha');

const factorial = require('../plain/my_module');

// Test driven development
const assert = chai.assert;

// Behavior driven development
const should = chai.should();
const expect = chai.expect;




describe('Testing factorial function', function() {
    describe('Initial tests', function() {

        it('5! should be 120(assert)', function() {
            let result = factorial(5);
            assert(result === 120);
        });

        
    });

    describe('Advanced tests', function() {

        // Failing test
        // it('5! should be 120(should)', function() {
        //     factorial(5).should.be.equal(121);
        // })



        it('string factorial', function() {
            isNaN(factorial('some string')).should.be.equal(true);
        })

        it('', function() {
            
        })

        it('', function() {
            
        })
    })
});