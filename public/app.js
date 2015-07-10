(function(){

	var app = angular.module("newsfeed", ["ngRoute"]);

	app.config(function($routeProvider) {

		$routeProvider
			.when("/main", {
				templateUrl: "main.html",
				controller: "MainController"
			})
			.otherwise({redirectTo: "/main"});
		
	});

}());