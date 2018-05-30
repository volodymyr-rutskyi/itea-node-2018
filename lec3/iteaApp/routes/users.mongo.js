var express = require('express');
var router = express.Router();

const Person = require('../models/person');



/* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log('Function 1');
//   // res.send('respond with a resource');
//   next();
// }, (req,res,next) => {
//   req.someValue = '...../'; 
//   next();
// }, (req, res) => {
//   res.send(req.someValue);
// });

// router.get(/[0-9]+/, (req, res, next) => {
//   res.send(req.params.id);
// });

// router.get('/r*e', (req, res, next) => {
//   res.send('Found');
// });

// router.post('/:id', (req, res) => {
//   res.send(req.params.id);
// });


// router.all('/', (req, res) => {
//   console.log(req.body);
//   console.log(req.query);
//   res.send('Got it!');
// });


router.get('/:id', (req, res) => {
  Person.findById(req.params.id, (err, result) => {
    console.log(err);
    console.log(result);
    res.send(JSON.stringify(result, null, 2));
  });
  // res.send('To be done...');
});

router.post('/', (req, res) => {
  let person = new Person(req.body);

  person.save((err, result) => {
    res.send(JSON.stringify(result));
  });
});

router.delete('/:id', (req, res) => {
  
  Person.findById(req.params.id, (err, result) => {
    if (err) return res.send('An error: ' + err.message);
    result.remove((err) => {
      if (err) return res.send("Could not delete user: " + err.message);
      res.send('Deleted successfully!');
    });
    // res.send(JSON.stringify(result, null, 2));
  });
});

router.get('/byname/:name', (req, res) => {
  Person.find({first_name: req.params.name}, (err, result) => {
    console.log(err);
    console.log(result);
    res.send(JSON.stringify(result));
  });
});

module.exports = router;
