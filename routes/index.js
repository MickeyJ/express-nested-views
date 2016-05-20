var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  res.render('view_1');
});

router.get('/view_1_nested_1', function(req, res, next) {
  res.render('view_1_nested_1');
});

router.get('/view_1_nested_2', function(req, res, next) {
  res.render('view_1_nested_2');
});

router.get('/double_nested_one', function(req, res, next) {
  res.render('double_nested_one');
});

router.get('/double_nested_two', function(req, res, next) {
  res.render('double_nested_two');
});


router.get('/view_2', function(req, res, next) {
  res.render('view_2');
});

router.get('/view_2_nested', function(req, res, next) {
  res.render('view_2_nested');
});

module.exports = router;
