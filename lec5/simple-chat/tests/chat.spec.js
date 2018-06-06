// const chai = require('chai');
// const mocha = require('mocha');

// const User = require('../models/user');

// let expect = chai.expect;
// let should = chai.should();
// let assert = chai.assert;

// let db = null;

// const mongoose = require('mongoose');

// describe('Testing user model', function () {

//     before('Preparing database connection', function(done) {
//         console.log('Preparing database connection');
        
//         //conection to database
//         const DB_URL = 'mongodb://iteadbo:password123@ds245680.mlab.com:45680/simple-chat'
//         db = mongoose.connect(DB_URL, function (err) {
//             if (err) done(err);
//             else done();
//         });
//     })


//     it('Saving a user', function (done) {
//         let user = new User({
//             username: 'Daneil',
//             password: 'hello'
//         });

//         console.log('saving a user');
//         user.save(function (err, result) {
//             done();
//             done('one');
//             done('two');
//             done('three');
//             // console.log('Saved user');
//             // console.log('one', err);
//             // console.log('two', result);
//             // if (user.username != result.username)
//             //     return done('Username not saved correctly');

//             // if (user.password !== result.password)
//             //     return done('Password not hashed!');

//             // done();
//         });

        
//     }).timeout(10000);

//     after('Cleaning up', function () {

//     });
// });