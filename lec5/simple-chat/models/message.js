var mongoose = require('mongoose');
var Message = new mongoose.Schema({
    id:{
        type: String,
        required: true  
    },
    name: {
        type: String,
        required: true
    },
    msg:{
        type: String,
    }
}, {collection:'message'});

module.exports = mongoose.model('Message', Message);