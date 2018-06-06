var mongoose = require("mongoose");
var User = new mongoose.Schema({
    username:{
        type: String,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true
    }

},{collection:"users"});
module.exports = mongoose.model("User", User); 