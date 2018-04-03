var express = require('express');

module.exports = function(app) {
	app.get('/', function(req, res) {
		res.render('index.ejs')
	});

	app.get('/getData', function(req, res) {
		res.json({ message: "Hello, World!" });
	});
}