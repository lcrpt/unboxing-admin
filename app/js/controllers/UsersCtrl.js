angular.module('UsersCtrl', []).controller('UsersController', ['$scope', 'Users', function($scope, Users) {
	$scope.tagline = 'Users';
	$scope.yesNoResult = null;

	Users.getUsers().then(function(users) {
		$scope.users = users;
	});

	$scope.saveUser = function(user) {
		Users.postUser(user).then(function(newUser) {
			console.log('save user success');
		}).catch(function(error) {
			console.error('error', error);
		})
	};
}]);
