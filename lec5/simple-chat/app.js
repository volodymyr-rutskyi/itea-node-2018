const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const socketioJwt = require('socketio-jwt');
const jwt = require('jsonwebtoken');

const IoRouter =  require('./routes/io');
const ioRouter = new IoRouter();

const mongoose = require('mongoose');

const UserModel = require("./models/user.js");
const MessageModel = require("./models/message");


// let user = new UserModel({username: 'Mike', password: 'password'});
// user.save();

//conection to database
const DB_URL = 'mongodb://iteadbo:password123@ds245680.mlab.com:45680/simple-chat'
var db = mongoose.connect(DB_URL, function (err) {
    if (err) console.log("Error during connection: " + JSON.stringify(err));
    else console.log("Connected successfully");
});




const SECRET_KEY = 'randomsecret';


// view engine
app.set('view engine', 'jade');

// express middleware
app.use(express.static('./public'));
app.use(express.json());

// socket.io middleware


app.get('/', function(req, res){
    res.render('index', {});
});

app.get('/login', function(req, res) {

    res.render('login', {});
});
app.post('/login/register', function(req,res){
    let user = new UserModel({
        username:req.body.username,
        password:req.body.password
    });
    user.save(function(err,result){
        if(err){console.log('Error while registering');
        res.status(500);
        res.send(err.message);
    } else {
        console.log('User is created successfully');
        res.send(result);
    }
    });
})
app.post('/login/auth', function(req,res) {

    UserModel.findOne({username: req.body.username}, (err, response) => {
        if (err) {
            res.status(500);
            res.send(err.message);
        }

        else if (!response) {
            res.status(404);
            res.send('User not found!');
            
        } else if (req.body.password !== response.password) {
            res.status(400);
            res.send('Wrong username of password');
        } else {
            var userProfile = {username: response.username, id: response._id};
            
            var token = jwt.sign(userProfile, SECRET_KEY, {expiresIn: 3600});
            res.send(token);
        }

    });
});


io.on('connection', socketioJwt.authorize({
    secret: SECRET_KEY,
    timeout: 10000      // Allow client 10 seconds to authenticate
}))
.on('authenticated', function(socket){

    // Handle io requests
    ioRouter.route(socket);
});

let port = process.env.PORT || 3000;

http.listen(port, function(){
    console.log('listening on *:' + port);
});


