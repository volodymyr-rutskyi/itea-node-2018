const mongoose = require('mongoose');

let Person = mongoose.Schema({
    first_name: String,
    last_name: {
        required: false,
        type: String
    }
}, {collection: 'people'});

// Person.pre('save', function (cb) {
//     this.first_name = this.first_name + '-don';
//     cb();
// });


module.exports = mongoose.model('Person', Person);