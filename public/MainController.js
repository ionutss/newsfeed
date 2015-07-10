(function () {

	var app = angular.module("newsfeed");

	var MainController = function($scope) {

		$scope.currentUser = {
			name: "Mark Zuckerberg",
			picture: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNjg3ODAzNDA0.jpg",
		};

		$scope.post = {

			author: "Mark Zuckerberg",
			picture: "http://a4.files.biography.com/image/upload/c_fit,cs_srgb,dpr_1.0,h_1200,q_80,w_1200/MTIwNjA4NjMzNjg3ODAzNDA0.jpg",
			content: "This is some preview text.",
			likes: 2,
			comments: [
			{

				name: "Steve Mark",
				picture: "http://www.campusidea.com/images/male_profile.gif",
				content: "nice",
				likes: 1
			},
			{
				name: "Kate A.",
				picture: "http://www.blackfoot.ca/wp-content/uploads/2014/09/profile-photo.jpg",
				content: "cool",
				likes: 0
			},
			{
				name: "John Wick",
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
			$scope.post.comments.push(
			{
				name: $scope.currentUser.name,
				picture: $scope.currentUser.picture,
				content: $scope.newComm,
				likes: 0
			});

			$scope.newComm = null;
		};

		$scope.commentsToShow = 2;

		$scope.viewMoreComments = function()
		{
			$scope.commentsToShow = null;
			$('#xyz').focus();
		};

		$scope.commBoxFocus = function()
		{
			$('#xyz').focus();
		};
	};

	app.controller('MainController', ['$scope', MainController]);


}());
