var express = require('express');
var crypto = require('crypto');
var Post = require('./post.scheme.js')

var getPosts = function(req, res, next) {
	Post.find(function (err, posts) {
	  if (err) {
	  	return console.error(err);
	  }
	  else {
	  	var imgMD5;
	  	var imgArray = [];
	  	var tempObj;
	  	posts.forEach(function(post) {
	  		imgMD5 = crypto.createHash('md5').update(post.email.toLowerCase()).digest('hex');
	  		tempObj = {
	  			email: post.email,
	  			message: post.message,
	  			img: 'https://gravatar.com/avatar/' + imgMD5
	  		};
	  		imgArray.push(tempObj);
	  	});
	  	res.send(imgArray);
	  }
	})
};

module.exports = getPosts;

