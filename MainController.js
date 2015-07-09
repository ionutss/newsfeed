(function() {

	var app = angular.module("newsfeed");

	var MainController = function($scope) {

		$scope.post = {

			author: "Mark Zuckerberg",
			picture: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNjg3ODAzNDA0.jpg",
			content: "This is some preview text.",
			likes: 0,
			comments: [
			{

				name: "Steve",
				picture: "http://www.campusidea.com/images/male_profile.gif",
				content: "nice",
				likes: 0
			},
			{
				name: "Kate",
				picture: "http://www.blackfoot.ca/wp-content/uploads/2014/09/profile-photo.jpg",
				content: "cool",
				likes: 0
			},
			{
				name: "John",
				picture: "http://media.cirrusmedia.com.au/LW_Media_Library/LW-603-p28-partner-profile.jpg",
				content: "meh",
				likes: 0
			}]
		};


		$scope.postLike = function()
		{
			$scope.post.likes += 1;
			
		};

		$scope.commLike = function(index)
		{

			$scope.post.comments[index].likes += 1;
			
			
		};

		$scope.newComm = '';

		$scope.addComm = function()
		{
			
			var commNr = $scope.post.comments.length;
			
			$scope.post.comments[commNr] =
			{
				name: "Mark Zuckerberg",
				picture: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNjg3ODAzNDA0.jpg",
				content: $scope.newComm,
				likes: 0
			};



		};

		

	};

	app.controller('MainController', ['$scope', MainController]);


}());