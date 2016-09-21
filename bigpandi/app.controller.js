(function() {
  'use strict';

  angular
    .module('app')
    .controller('FeedController', FeedController);

  function FeedController(FeedAPI) {
    var vm = this;
    var url = 'http://localhost:3000/posts';

    vm.feed = [];

    vm.newPost = newPost;

    function activate() {
    	getPosts();
    }

    activate();

    function newPost(email, message) {
    	var data = {
    		'email': email,
    		'message': message
    	};

    	return FeedAPI.newPost(data).then(function() {
    		getPosts();
    		vm.email = '';
    		vm.message = '';
    	});
    }

    function getPosts() {
    	return FeedAPI.getPosts().then(function(data) {
    		vm.feed = data;
    	})
    }
  }
})();
