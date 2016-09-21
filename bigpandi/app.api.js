(function() {
  'use strict';

  angular
    .module('app')
    .factory('FeedAPI', FeedAPI);

  function FeedAPI($http) {
    var url = 'http://localhost:3000/posts';

    var service = {
        newPost: newPost,
        getPosts
    };

    return service;

    function newPost(data) {
    	return $http.post(url, data);
    }

    function getPosts() {
    	return $http.get(url).then(function(data) {
    		return data.data;
    	})
    }
  }
})();
