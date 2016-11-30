angular.module('UsersCtrl', []).controller('UsersController', function($scope, Users) {
	$scope.tagline = 'Users';

	Users.getUsers().then(function(users) {
		$scope.users = users;
	});
});
