var express = require('express');
var router = express.Router();

var getPosts = require('.././posts/getPosts.js');
var newPost = require('.././posts/newPost.js');

router.get('/', getPosts);
router.post('/', newPost);

module.exports = router;
