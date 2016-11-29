angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/dashboard.html',
			controller: 'MainController'
		})

	$locationProvider.html5Mode(true);
}]);
