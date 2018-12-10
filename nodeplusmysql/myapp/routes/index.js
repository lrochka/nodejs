var express = require('express');
var router = express.Router();
var connection  = require('../db');
/* GET home page. */
router.get('/', function(req, res, next) {
    connection.query('SELECT * FROM news ORDER BY id DESC', function (error, results, fields) {
	  if (error) throw error;
	  // connected!
	  res.render('index', { 
	  	title: 'Express',
	  	results
	  });
	});
});

router.get('/add-item', function(req, res, next) {
	res.render('add-item', { 
		title: 'Express',
	});
});

router.post('/add-item', function(req, res, next) {
	connection.query('INSERT INTO news SET ?', {
		title: req.param('title'),
		text: req.param('text'),
		author: req.param('author')
	}, function() {
		res.render('add-item', { 
			title: 'Express',
		});
	})
});

module.exports = router;
