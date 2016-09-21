var express = require('express');
var mongoose = require('mongoose');

mongoose.connect('mongodb://tazlil:Password1@ds035806.mlab.com:35806/bigpandi');

var Schema = mongoose.Schema;

var postSchema = new Schema({
  email: { type: String, required: true},
  message: { type: String, required: true}
});

var Post = mongoose.model('Post', postSchema);

module.exports = Post;