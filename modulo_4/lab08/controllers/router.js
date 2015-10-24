var express = require('express');

var router = express.Router();

router.get('/', function(req, res){
	res.render('index', {'title' : 'lab08'});
});

router.get('/contact', function(req, res){
	res.render('contact', {});
});

module.exports = router;