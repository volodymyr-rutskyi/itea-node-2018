const chai = require('chai');
const mocha = require('mocha');
const sinon = require('sinon');
const sinonMongoose = require('sinon-mongoose');

const User = require('../models/user');

let expect = chai.expect;
let should = chai.should();
let assert = chai.assert;

const mongoose = require('mongoose');

describe('Mock database call', function () {

    before('Mocking..', function () {
        sinon.mock(User)
            .expects('find')
            .withArgs({"username": "John"})
            .resolves({password: "password"})
    });

    it('Testing mocked calls', function(done) {
        User
        .findOne({"username": "John"})
            .then(user => {
                if (user.password != "password")
                    done('Wrong user password');
                else 
                    done();
            })
            .catch((err) => {
                done(err);
            })
    });
})