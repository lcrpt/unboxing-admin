angular.module('UsersCtrl', []).controller('UsersController', ['$scope', 'Users', function($scope, Users) {
	$scope.tagline = 'Users';
	$scope.yesNoResult = null;

	Users.getUsers().then(function(users) {
		$scope.users = users;
	});
}]);
