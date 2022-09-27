var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '' });
});

/* GET About page. */
router.get('/about', function(req, res) {

  let catDetails = [
  {
    'name':'Chetan Panchal'
  },
  {
    'email':'Chetanpanchal9876@gmail.com'
  },
  {
    'dob':'21/11/1996'
  },
]

  res.render('about', { 
    title: 'About',
    catDetails: catDetails
   });
});

module.exports = router;
