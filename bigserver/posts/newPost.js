var express = require('express');
var Post = require('./post.scheme.js')

var newPost = function(req, res, next) {
	var newEntry = new Post({
		'email': req.body.email,
		'message': req.body.message
	});

	newEntry.save(function(err) {
  		if (err) throw err;
  		console.log('Post added successfully!');
	});

	res.send('asddsa');
};

module.exports = newPost;