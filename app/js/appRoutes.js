angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/dashboard.html',
			controller: 'MainController'
		})
		.when('/users', {
			templateUrl: 'views/users.html',
			controller: 'UsersController'
		})
		.when('/orders', {
			templateUrl: 'views/orders.html',
			controller: 'OrdersController'
		})
		.when('/items', {
			templateUrl: 'views/items.html',
			controller: 'ItemsController'
		})

	$locationProvider.html5Mode(true);
}]);
