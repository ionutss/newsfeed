(function() {

	var app = angular.module("newsfeed");

	var MainController = function($scope) {

		$scope.post = {
			content: "This is some preview text.",
			likes: 0,
			comments: ["nice", "cool", "meh"]
		};


	};

	app.controller('MainController', ['$scope', MainController]);


}());